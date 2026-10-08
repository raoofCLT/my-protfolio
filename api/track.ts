export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phone, apiKey, message } = req.body || {};
  const targetPhone =
    phone ||
    process.env.CALLMEBOT_PHONE ||
    process.env.VITE_CALLMEBOT_PHONE ||
    "971569296653";
  const targetApiKey =
    apiKey ||
    process.env.CALLMEBOT_API_KEY ||
    process.env.VITE_CALLMEBOT_API_KEY ||
    "5622612";

  if (!targetApiKey) {
    return res.status(400).json({ error: "API key is missing" });
  }

  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
      targetPhone,
    )}&text=${encodeURIComponent(message)}&apikey=${encodeURIComponent(
      targetApiKey,
    )}`;
    const response = await fetch(url);
    const text = await response.text();
    return res.status(200).json({ success: true, result: text });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Failed to notify WhatsApp" });
  }
}
