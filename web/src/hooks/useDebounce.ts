import { useEffect } from "react";

export function useDebounce(
  query: string,
  callback: () => void,
  opts?: {
    length?: number;
    timeout?: number;
  }
) {
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (query.length >= (opts?.length || 2))
      timeout = setTimeout(callback, opts?.timeout || 300);
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [query]);
}
