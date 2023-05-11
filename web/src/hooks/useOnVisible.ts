import { type RefObject, useEffect, useState } from "react";

export function useOnVisible(
  ref: RefObject<HTMLElement>,
  callback: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void,
  opts?: {
    threshold?: number | number[];
    margin?: string;
    disabled?: boolean;
    runOnce?: boolean;
  }
) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (let entry of entries) {
          if (entry.intersectionRatio > 0) {
            callback(entries, obs);
            if (opts?.runOnce) setDisabled(true);
            break;
          }
        }
      },
      {
        rootMargin: opts?.margin,
        threshold: opts?.threshold,
      }
    );

    if (!disabled && opts?.disabled !== true && ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current !== null) observer.unobserve(ref.current);
    };
  }, [ref, opts]);
}
