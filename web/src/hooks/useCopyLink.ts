import { relativeLink } from "@/utils/preprocessors";
import ClipboardJS from "clipboard";
import { type RefObject, useEffect, useState } from "react";

export default function useCopyLink(link: string, ref: RefObject<HTMLElement>) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const clipboard = new ClipboardJS(ref.current, {
        text: function () {
          return relativeLink(link);
        },
      });
      clipboard.on("success", () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 300);
      });
      clipboard.on("error", (e) => console.log("Error copying", e));
      return () => {
        clipboard.destroy();
      };
    }
  }, [ref]);

  return {
    isCopied,
  };
}
