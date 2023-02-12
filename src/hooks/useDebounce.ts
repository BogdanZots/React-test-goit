import { useRef } from "react";

export const useDebounce = (cb: () => void, delay: number) => {
  const isFirstRun = useRef(true);
  const prevTimeout = useRef<NodeJS.Timeout | null>(null);

  if (prevTimeout.current) {
    clearTimeout(prevTimeout.current);
  }

  prevTimeout.current = setTimeout(() => {
    if (!isFirstRun.current) {
      cb();
    }
    isFirstRun.current = false;
  }, delay);
};
