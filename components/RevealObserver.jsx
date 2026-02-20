"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let frameId = 0;
    let observer;

    const setupObserver = () => {
      const nodes = document.querySelectorAll("[data-reveal]");
      if (!nodes.length) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -8% 0px"
        }
      );

      nodes.forEach((node) => {
        if (!node.classList.contains("is-visible")) {
          observer.observe(node);
        }
      });
    };

    // Wait one frame so App Router transitions fully commit new DOM nodes.
    frameId = window.requestAnimationFrame(setupObserver);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
