import { useEffect } from "react";
import { trackVisitor } from "@/utils/visitorTracker";

export const useVisitorTracker = () => {
  useEffect(() => {
    // Delay slightly (1.5s) to ensure initial page render is uninterrupted
    const timer = setTimeout(() => {
      trackVisitor();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
};
