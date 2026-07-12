"use client";

// Shared motion foundation: Lenis smooth scroll bridged into GSAP's ticker so
// ScrollTrigger scrubbing stays butter-smooth (autoRaf false + gsap.ticker).
// Everything is client-only: call these hooks from useEffect-driven code paths.
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let bridgeInstalled = false;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

/** Install Lenis + GSAP ScrollTrigger bridge once, on the client. */
export function useLenisBridge() {
  useEffect(() => {
    if (prefersReducedMotion() || bridgeInstalled) return;
    let lenis: import("lenis").default | undefined;
    let rafCallback: ((time: number) => void) | undefined;
    let cancelled = false;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({ autoRaf: false, lerp: 0.12 });
      lenis.on("scroll", ScrollTrigger.update);
      rafCallback = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(rafCallback);
      gsap.ticker.lagSmoothing(0);
      bridgeInstalled = true;
    })();

    return () => {
      cancelled = true;
      if (rafCallback) gsap.ticker.remove(rafCallback);
      lenis?.destroy();
      bridgeInstalled = false;
    };
  }, []);
}

/** True only after mount on clients that want motion (SSR renders static). */
export function useMotionReady(): boolean {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!prefersReducedMotion()) setReady(true);
  }, []);
  return ready;
}

export { gsap, ScrollTrigger };
