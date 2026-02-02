import { useEffect, useState, RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
}

export const useInView = (
  ref: RefObject<Element>,
  options: UseInViewOptions = {},
): boolean => {
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = "0px" } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: margin,
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, once, margin]);

  return isInView;
};
