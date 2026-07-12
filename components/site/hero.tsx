"use client";

// Hero "Main Menu": B1 cutout parallax rig. Four layers (stadium plate,
// confetti screen-blend, the real Road to Global Cup player cutout, floodlight
// haze) drift at different rates on cursor AND scroll, recreating the game's
// menu as a living scene. Initial paint is the fully composed static shot.
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, isFinePointer, prefersReducedMotion } from "./motion";

const HEADLINE_WORDS = ["Omer", "Izhaki", "plays", "to", "ship."];

export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLImageElement>(null);
  const confetti = useRef<HTMLImageElement>(null);
  const player = useRef<HTMLImageElement>(null);
  const haze = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Scroll parallax: layers leave the viewport at different speeds.
      // Transform-only, no pin, so full-page screenshots stay clean.
      const scrub = { scrollTrigger: { trigger: stage.current, start: "top top", end: "bottom top", scrub: 0.6 } };
      gsap.to(bg.current, { yPercent: 14, scale: 1.12, ease: "none", ...scrub });
      gsap.to(confetti.current, { yPercent: -10, ease: "none", ...scrub });
      gsap.to(player.current, { yPercent: 8, ease: "none", ...scrub });
      gsap.to(haze.current, { opacity: 0.9, ease: "none", ...scrub });

      // Cursor drift (desktop only): each layer follows at its own depth rate.
      if (isFinePointer()) {
        const layers = [
          { el: bg.current, factor: 8 },
          { el: confetti.current, factor: 22 },
          { el: player.current, factor: 14 },
        ];
        const movers = layers.map((l) => ({
          x: gsap.quickTo(l.el, "x", { duration: 0.8, ease: "power3" }),
          y: gsap.quickTo(l.el, "y", { duration: 0.8, ease: "power3" }),
          factor: l.factor,
        }));
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          for (const m of movers) {
            m.x(-nx * m.factor);
            m.y(-ny * m.factor);
          }
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
      }
    }, stage);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={stage} className="relative flex min-h-dvh items-end overflow-hidden">
      {/* L0: stadium night plate */}
      <img
        ref={bg}
        src="/assets/stadium-hero.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover will-change-transform"
      />
      {/* L1: confetti + floodlight haze, screen-blended over the plate */}
      <img
        ref={confetti}
        src="/assets/confetti-layer.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-screen will-change-transform"
      />
      {/* L2: the real game character, cut out, standing on the podium */}
      <img
        ref={player}
        src="/assets/game/player-arg.png"
        alt="Chibi footballer character from Road to Global Cup, the iOS game Omer built"
        className="absolute bottom-[8dvh] end-[4%] z-10 h-[52dvh] w-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] will-change-transform sm:h-[62dvh] md:end-[8%] md:h-[72dvh]"
      />
      {/* L3: front haze for text legibility */}
      <div
        ref={haze}
        aria-hidden
        className="absolute inset-0 z-10 bg-gradient-to-t from-stadium via-stadium/45 to-transparent opacity-75"
      />

      {/* Copy block, lower-start like the game menu */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 pb-[10dvh] pt-28 md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-stadium/70 px-4 py-1.5 font-scoreboard text-xs tracking-[0.18em] text-gold backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-pitch" />
          OPEN TO FULL-TIME ROLES
        </span>

        <h1 className="word-rise mt-5 max-w-3xl text-5xl font-extrabold leading-none tracking-tighter text-flood md:text-7xl">
          {HEADLINE_WORDS.map((w, i) => (
            <span key={w} style={{ animationDelay: `${i * 70}ms` }} className="me-[0.24em] last:me-0">
              {w}
            </span>
          ))}
        </h1>

        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-flood-dim md:text-lg">
          CS and cybersecurity student who ships real products: an iOS game on the
          App Store, AI apps, and a quant trading bot. Open to business opportunities too.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <TrophyCta />
          <a
            href="/omer-izhaki-cv.pdf"
            download="Omer-Izhaki-CV.pdf"
            className="ticket-cta rounded-lg border border-flood/35 py-3 pe-5 ps-14 font-scoreboard text-sm font-semibold tracking-[0.12em] text-flood transition-colors hover:border-gold hover:text-gold active:scale-[0.98] md:hidden"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}

// Hero primary CTA: gold trophy plate. Press stamps it down; hover flares the
// engraved shine. Unique garment, owned by the hero alone.
function TrophyCta() {
  return (
    <a
      href="#fixtures"
      className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gold to-gold-deep px-7 py-3.5 text-base font-bold text-stadium shadow-[0_6px_24px_rgba(245,181,42,0.35)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
    >
      <span className="relative z-10">View my matches</span>
      {/* Engraved shine sweep */}
      <span
        aria-hidden
        className="absolute inset-y-0 -start-1/3 w-1/3 -skew-x-12 bg-flood/40 blur-sm transition-transform duration-500 group-hover:translate-x-[320%]"
      />
    </a>
  );
}
