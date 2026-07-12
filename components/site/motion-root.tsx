"use client";

// Installs the Lenis smooth-scroll + GSAP ScrollTrigger bridge for the page.
// Rendered once from the server page; all motion lives client-side.
import { useLenisBridge } from "./motion";

export function MotionRoot() {
  useLenisBridge();
  return null;
}
