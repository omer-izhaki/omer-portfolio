"use client";

// Season Fixtures (Projects): D1 horizontal cinema rail. A sticky viewport
// pans a card track sideways while the stadium-concourse panorama drifts at
// half rate behind it. Sticky positioning (not GSAP pin) means no pin-spacer
// and clean full-page screenshots. Mobile degrades to a native snap carousel.
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";

type Fixture = {
  id: string;
  kickoff: string;
  title: string;
  tag: string;
  body: string;
  stack: string;
  image: string;
  imageAlt: string;
  link?: { href: string; label: string };
  gallery?: { src: string; alt: string }[];
};

const FIXTURES: Fixture[] = [
  {
    id: "global-cup",
    kickoff: "MATCH 01",
    title: "Road to Global Cup",
    tag: "iOS GAME, LIVE ON THE APP STORE",
    body:
      "Solo-built 3v3 arcade football for iOS in Unity 6: custom AI opponents, dynamic pitch obstacles, host-authoritative 1v1 multiplayer, a virtual economy, and Game Center integration. Full lifecycle from first prototype to App Store publication.",
    stack: "Unity 6, C#, Apple Game Center",
    image: "/assets/game/action-shot.jpg",
    imageAlt: "Road to Global Cup player striking the ball",
    link: { href: "https://apps.apple.com/app/road-to-global-cup/id6784271196", label: "App Store" },
    gallery: [
      { src: "/assets/game/menu-screenshot.jpg", alt: "Road to Global Cup main menu" },
      { src: "/assets/game/gameplay-1.jpg", alt: "Tutorial match against South Korea" },
      { src: "/assets/game/gameplay-2.jpg", alt: "Arcade match with pitch obstacles" },
    ],
  },
  {
    id: "caliq",
    kickoff: "MATCH 02",
    title: "Caliq",
    tag: "AI NUTRITION COACH",
    body:
      "Cross-platform mobile app that turns a meal photo into instant macro counts with multimodal AI. React Native front, Gemini 2.0 Flash vision, SQLite offline-first storage.",
    stack: "React Native, TypeScript, Gemini 2.0 Flash, SQLite",
    image: "/assets/project-caliq.png",
    imageAlt: "Nutrition app concept on a training pitch",
  },
  {
    id: "ometrader",
    kickoff: "MATCH 03",
    title: "OmeTheTrader",
    tag: "QUANT TRADING BOT",
    body:
      "Automated US equities system: a PyTorch LSTM signal engine with HMM regime detection, wired over a ZeroMQ bridge to a custom MQL5 executor handling dynamic slippage and trailing stops. Deployed on GCP.",
    stack: "Python, PyTorch, MetaTrader 5, ZeroMQ, GCP",
    image: "/assets/project-trader.png",
    imageAlt: "Trading desk scene with a glowing chart",
    link: { href: "https://github.com/omer-izhaki/OmeTheTrader", label: "View code" },
  },
  {
    id: "ar-assist",
    kickoff: "MATCH 04",
    title: "AR Technician Assistant",
    tag: "AI VIDEO STARTUP, IRIS PROGRAM",
    body:
      "An AI video assistant that guides field technicians hands-free: real-time WebRTC video, Google Gemini Live reasoning, and a custom 2D/3D diagram engine drawing repair steps over the machine.",
    stack: "WebRTC, Gemini Live, 2D/3D diagram engine",
    image: "/assets/project-ar.png",
    imageAlt: "Technician wearing AR glasses seeing holographic repair diagrams",
    link: { href: "https://github.com/omer-izhaki/-ar-technician-assistant", label: "View code" },
  },
];

export function Fixtures() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const pano = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    // Desktop only: the rail. Mobile keeps the native snap carousel.
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const getDistance = () =>
        (track.current?.scrollWidth ?? 0) - window.innerWidth;
      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });
      gsap.to(pano.current, {
        x: () => -getDistance() * 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section id="fixtures" ref={wrap} className="relative md:h-[340dvh]">
      <div className="top-0 overflow-hidden md:sticky md:h-dvh">
        {/* Concourse panorama drifting behind the cards at half rate */}
        <img
          ref={pano}
          src="/assets/concourse-panorama.png"
          alt=""
          aria-hidden
          className="absolute inset-0 hidden h-full w-[160%] max-w-none object-cover opacity-45 will-change-transform md:block"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-b from-stadium/80 via-transparent to-stadium/90 md:block"
        />

        <div className="relative mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-[12dvh]">
          <p className="font-scoreboard text-xs tracking-[0.24em] text-gold">
            SEASON 2022/27
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tighter text-flood md:text-5xl">
            Season fixtures
          </h2>
        </div>

        {/* The rail: translated on desktop, native snap scroll on mobile */}
        <div
          ref={track}
          className="relative mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-10 will-change-transform md:mt-[6dvh] md:snap-none md:overflow-x-visible md:ps-[8vw] md:pe-[16vw]"
        >
          {FIXTURES.map((f) => (
            <FixtureCard key={f.id} fixture={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FixtureCard({ fixture }: { fixture: Fixture }) {
  return (
    <article className="w-[86vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-tier-edge bg-stadium/85 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:w-[70vw] md:w-[44rem]">
      <div className="relative">
        <img src={fixture.image} alt={fixture.imageAlt} className="aspect-[3/2] w-full object-cover" />
        <span className="absolute start-4 top-4 rounded-md bg-stadium/85 px-3 py-1 font-scoreboard text-[11px] tracking-[0.22em] text-gold backdrop-blur">
          {fixture.kickoff}
        </span>
      </div>

      <div className="p-6 md:p-8">
        <p className="font-scoreboard text-[11px] tracking-[0.2em] text-pitch">{fixture.tag}</p>
        <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-flood md:text-3xl">
          {fixture.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-flood-dim">{fixture.body}</p>

        {fixture.gallery && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {fixture.gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                className="aspect-video w-full rounded-lg border border-tier-edge object-cover"
              />
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-scoreboard text-xs text-flood-dim">{fixture.stack}</p>
          {fixture.link ? (
            // Scoreboard chip: glyphs flip like stadium split-flap digits on hover
            <a
              href={fixture.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="fixture-chip flex shrink-0 items-center gap-1 rounded-md border border-gold/50 bg-tier px-3.5 py-2 font-scoreboard text-xs font-semibold tracking-[0.16em] text-gold transition-shadow hover:shadow-[0_0_16px_rgba(245,181,42,0.5)] active:scale-[0.98]"
            >
              {fixture.link.label.split("").map((ch, i) => (
                <span key={i} className="chip-glyph inline-block" style={{ animationDelay: `${i * 30}ms` }}>
                  {ch === " " ? " " : ch}
                </span>
              ))}
            </a>
          ) : (
            <span className="shrink-0 rounded-md border border-tier-edge px-3.5 py-2 font-scoreboard text-[11px] tracking-[0.16em] text-flood-dim">
              PRIVATE BUILD
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
