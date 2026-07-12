"use client";

// Football custom cursor (spectacle tier contract): a small ball that trails
// the pointer with spring physics and spins up over interactive targets.
// Client-only: renders nothing on the server and on touch / reduced-motion.
import { useEffect, useRef, useState } from "react";
import { gsap, isFinePointer, prefersReducedMotion } from "./motion";

export function FootballCursor() {
  const [live, setLive] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    setLive(true);
    document.body.classList.add("cursor-live");

    const ball = ballRef.current;
    if (!ball) return;

    const xTo = gsap.quickTo(ball, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(ball, "y", { duration: 0.35, ease: "power3" });
    let spin: gsap.core.Tween | undefined;

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const target = e.target as Element | null;
      const interactive = !!target?.closest("a, button, [data-cursor-grow]");
      gsap.to(ball, {
        scale: interactive ? 2.1 : 1,
        duration: 0.25,
        overwrite: "auto",
      });
      if (interactive && !spin) {
        spin = gsap.to(ball, { rotation: 360, duration: 0.9, repeat: -1, ease: "none" });
      } else if (!interactive && spin) {
        spin.kill();
        spin = undefined;
        gsap.set(ball, { rotation: 0 });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      spin?.kill();
      document.body.classList.remove("cursor-live");
    };
  }, []);

  if (!live) return null;

  return (
    <div
      ref={ballRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] -ml-3 -mt-3 h-6 w-6"
    >
      {/* Tiny football: white ball, kit-blue pentagon patches, gold ring */}
      <svg viewBox="0 0 24 24" className="h-full w-full drop-shadow-[0_0_6px_rgba(245,181,42,0.55)]">
        <circle cx="12" cy="12" r="10" fill="#eef1fb" stroke="#f5b52a" strokeWidth="1.5" />
        <polygon points="12,7 16,10 14.5,14.5 9.5,14.5 8,10" fill="#2b57e8" />
        <path d="M12 2v5M4 8l4 2M20 8l-4 2M6.5 20l3-5.5M17.5 20l-3-5.5" stroke="#1a2350" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
