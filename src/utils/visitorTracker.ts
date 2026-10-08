/**
 * Visitor Tracking & WhatsApp Notification Service
 * Uses CallMeBot API to send real-time alerts to WhatsApp
 */

export interface VisitorInfo {
  ip?: string;
  country?: string;
  city?: string;
  region?: string;
  isp?: string;
  org?: string;
  deviceType: "Mobile" | "Tablet" | "Desktop";
  os: string;
  browser: string;
  screenResolution: string;
  language: string;
  referrer: string;
  path: string;
  visitedAt: string;
}

const STORAGE_SESSION_KEY = "portfolio_visitor_session_tracked";
const STORAGE_TIME_KEY = "portfolio_last_tracked_time";
const COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours cooldown for repeat visits

/**
 * Detect client operating system
 */
function getOS(): string {
  const userAgent = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(userAgent)) return "iOS";
  if (/Android/.test(userAgent)) return "Android";
  if (/Windows NT 10.0|Windows NT 11.0/.test(userAgent)) return "Windows 10/11";
  if (/Windows/.test(userAgent)) return "Windows";
  if (/Macintosh|Mac OS X/.test(userAgent)) return "macOS";
  if (/Linux/.test(userAgent)) return "Linux";
  return "Unknown OS";
}

/**
 * Detect client browser
 */
function getBrowser(): string {
  const ua = navigator.userAgent;
  if (/Edg\//.test(ua)) return "Edge";
  if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) return "Chrome";
  if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return "Safari";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/OPR\//.test(ua) || /Opera/.test(ua)) return "Opera";
  return "Browser";
}

/**
 * Detect device form factor
 */
function getDeviceType(): "Mobile" | "Tablet" | "Desktop" {
  const ua = navigator.userAgent;
  const isTablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(
      ua,
    );
  if (isTablet) return "Tablet";
  const isMobile =
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
      ua,
    ) || window.innerWidth <= 768;
  return isMobile ? "Mobile" : "Desktop";
}

/**
 * Format timestamp nicely (UAE time / Dubai UTC+4)
 */
function getFormattedTime(): string {
  try {
    return new Intl.DateTimeFormat("en-AE", {
      timeZone: "Asia/Dubai",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date());
  } catch {
    return new Date().toLocaleString();
  }
}

/**
 * Build clean WhatsApp message template
 */
function buildWhatsAppMessage(info: VisitorInfo): string {
  const location =
    [info.city, info.country].filter(Boolean).join(", ") || "Unknown Location";
  const network = info.isp || info.org || "Standard Network";

  return [
    "🔔 *New Portfolio Visitor!*",
    `📍 Location: ${location}`,
    `🏢 Network: ${network}`,
    `📱 Device: ${info.deviceType} (${info.os} - ${info.browser})`,
    `🖥️ Screen: ${info.screenResolution}`,
    `🌐 Language: ${info.language}`,
    `🔗 Source: ${info.referrer}`,
    `📄 Page: ${info.path}`,
    `⏰ Time: ${info.visitedAt} (UAE)`,
  ].join(" • ");
}

/**
 * Main tracking function
 */
export async function trackVisitor(options?: {
  force?: boolean;
  apiKeyOverride?: string;
  phoneOverride?: string;
}) {
  const phone =
    options?.phoneOverride ||
    import.meta.env.VITE_CALLMEBOT_PHONE ||
    "971569296653";
  const apiKey =
    options?.apiKeyOverride ||
    import.meta.env.VITE_CALLMEBOT_API_KEY ||
    "5622612";

  // Check if API key is not configured yet
  if (!apiKey) {
    if (import.meta.env.DEV) {
      console.info(
        `%c[VisitorTracker]%c Ready! Add your CallMeBot API key to .env (VITE_CALLMEBOT_API_KEY) to start receiving WhatsApp alerts for phone: +${phone}`,
        "color: #25D366; font-weight: bold;",
        "color: inherit;",
      );
    }
    return;
  }

  // Prevent spamming / duplicate notifications unless forced
  if (!options?.force) {
    // Check session storage
    if (sessionStorage.getItem(STORAGE_SESSION_KEY)) {
      return;
    }

    // Check cooldown in localStorage (2 hours)
    const lastTracked = localStorage.getItem(STORAGE_TIME_KEY);
    if (lastTracked) {
      const elapsed = Date.now() - parseInt(lastTracked, 10);
      if (elapsed < COOLDOWN_MS) {
        return;
      }
    }
  }

  try {
    // 1. Fetch Location & Network info (free ipwho.is with fallback)
    let ipData: any = {};
    try {
      const res = await fetch("https://ipwho.is/", { cache: "no-store" });
      if (res.ok) {
        ipData = await res.json();
      }
    } catch {
      // Fallback
      try {
        const fallbackRes = await fetch("https://ipapi.co/json/");
        if (fallbackRes.ok) {
          const fb = await fallbackRes.json();
          ipData = {
            ip: fb.ip,
            city: fb.city,
            country: fb.country_name,
            connection: { isp: fb.org },
          };
        }
      } catch {
        // Continue even if geo lookup fails
      }
    }

    // 2. Parse client info
    const referrerHost = document.referrer
      ? (() => {
          try {
            return new URL(document.referrer).hostname;
          } catch {
            return document.referrer;
          }
        })()
      : "Direct / Link in bio";

    const visitorInfo: VisitorInfo = {
      ip: ipData.ip || "Unknown",
      country: ipData.country || ipData.country_name,
      city: ipData.city,
      region: ipData.region,
      isp: ipData.connection?.isp || ipData.org,
      org: ipData.connection?.org,
      deviceType: getDeviceType(),
      os: getOS(),
      browser: getBrowser(),
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || "en",
      referrer: referrerHost,
      path: window.location.pathname || "/",
      visitedAt: getFormattedTime(),
    };

    const message = buildWhatsAppMessage(visitorInfo);

    // 3. Send WhatsApp Alert directly from the visitor's browser
    const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
      phone,
    )}&text=${encodeURIComponent(message)}&apikey=${encodeURIComponent(apiKey)}`;

    // Use mode: 'no-cors' so browser executes the GET request without CORS blocks
    await fetch(callmebotUrl, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
    });

    // 4. Mark as tracked to prevent repeated pings
    sessionStorage.setItem(STORAGE_SESSION_KEY, "true");
    localStorage.setItem(STORAGE_TIME_KEY, Date.now().toString());

    if (import.meta.env.DEV) {
      console.log("[VisitorTracker] WhatsApp alert triggered:", visitorInfo);
    }
  } catch (error) {
    console.error("[VisitorTracker] Error tracking visitor:", error);
  }
}

// Attach a manual tester to window for quick debugging in console: window.__testVisitorAlert()
if (typeof window !== "undefined") {
  (window as any).__testVisitorAlert = (apiKeyOverride?: string) => {
    console.log("Triggering test visitor alert to WhatsApp...");
    return trackVisitor({ force: true, apiKeyOverride });
  };
}
