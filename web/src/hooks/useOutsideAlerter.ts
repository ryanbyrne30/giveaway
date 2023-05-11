import { type MutableRefObject, type RefObject, useEffect } from "react";

export default function useOutsideAlerter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: RefObject<Element> | MutableRefObject<Element>,
  callback: () => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.currentTarget &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
