import { useEffect } from "react";

export function useFreezeBody(doFreeze: boolean) {
  useEffect(() => {
    if (doFreeze) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [doFreeze]);
}
