"use client";

// Player Card (About): one full-width attribute card, board-2 faithful.
// Portrait on the left third, scoreboard attribute bars on the right.
// Bars fill via transform scaleX bound to scroll progress (transform-only).
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";

const ATTRIBUTES = [
  { label: "GPA", value: 85, max: 100, display: "85" },
  { label: "CREDITS", value: 78, max: 120, display: "78" },
  { label: "SHIPPED PRODUCTS", value: 4, max: 6, display: "4" },
  { label: "SOLDIERS LED", value: 5, max: 6, display: "5" },
];

export function PlayerCard() {
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".attr-fill", {
        scaleX: 0.12,
        transformOrigin: "left center",
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: card.current, start: "top 75%", end: "top 35%", scrub: 0.7 },
      });
    }, card);
    return () => ctx.revert();
  }, []);

  return (
    <section id="player-card" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div
        ref={card}
        className="grid overflow-hidden rounded-2xl border border-tier-edge bg-tier shadow-[0_18px_60px_rgba(0,0,0,0.45)] md:grid-cols-[1fr_1.6fr]"
      >
        {/* Portrait third: the Croatia player from the game, on kit-blue field */}
        <div className="relative flex items-end justify-center bg-gradient-to-b from-kit/25 to-stadium/60 pt-8">
          <img
            src="/assets/game/player-cro.png"
            alt="Chibi footballer character from Road to Global Cup"
            className="h-64 w-auto object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.5)] md:h-80"
          />
        </div>

        {/* Attribute side */}
        <div className="p-7 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tighter text-flood md:text-4xl">
            Omer Izhaki
          </h2>
          <p className="mt-1 text-sm font-medium text-flood-dim md:text-base">
            CS and cybersecurity student, game developer, IDF IT team leader. Netanya, Israel.
          </p>

          <dl className="mt-8 space-y-5">
            {ATTRIBUTES.map((a) => (
              <div key={a.label}>
                <div className="flex items-baseline justify-between">
                  <dt className="font-scoreboard text-xs tracking-[0.2em] text-flood-dim">
                    {a.label}
                  </dt>
                  <dd className="font-scoreboard text-lg font-semibold text-gold">{a.display}</dd>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-stadium">
                  <div
                    className="attr-fill h-full rounded-full bg-gradient-to-r from-gold-deep to-gold"
                    style={{ width: `${(a.value / a.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-[58ch] text-sm leading-relaxed text-flood-dim">
            Five years running military networks taught me to lead under pressure.
            Nights and weekends built the rest: Unity, PyTorch, React Native, and a
            habit of taking products all the way to shipped.
          </p>
        </div>
      </div>
    </section>
  );
}
