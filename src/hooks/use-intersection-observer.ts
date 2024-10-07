import { useEffect, useRef } from "react";

type CallbackType = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void;

const useIntersectionObserver = (
  callback: CallbackType,
  options?: IntersectionObserverInit,
) => {
  const targetRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry, observer);
        }
      });
    }, options);

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [callback, options]);

  return targetRef;
};

export default useIntersectionObserver;
