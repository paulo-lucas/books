import { useRef } from 'react';

export const useDebounce = (fn: Function, delay: number) => {
  const timeoutRef = useRef(0);

  function debounceFN(...args: any) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {}, delay);
    fn(args);
  }

  return debounceFN;
};
