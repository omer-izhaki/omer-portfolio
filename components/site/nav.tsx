// Site nav: crest badge + anchor links with sliding gold hairline + the
// ticket-stub Download CV button (its own garment, no shared button classes).
const links = [
  { href: "#player-card", label: "Player card" },
  { href: "#fixtures", label: "Fixtures" },
  { href: "#seasons", label: "Seasons" },
  { href: "#offer", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
      <nav className="pointer-events-auto mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to kickoff">
          <img
            src="/assets/icon-192.png"
            alt="Omer Izhaki club crest, number 23"
            className="h-11 w-11 rounded-xl border border-tier-edge shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
          />
          <span className="hidden font-scoreboard text-xs tracking-[0.22em] text-flood-dim sm:block">
            OMER IZHAKI
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-2 text-sm font-medium text-flood-dim transition-colors hover:text-flood"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="/omer-izhaki-cv.pdf"
          download="Omer-Izhaki-CV.pdf"
          className="ticket-cta rounded-lg border border-flood/35 bg-tier/70 py-2 pe-4 ps-14 font-scoreboard text-xs font-semibold tracking-[0.14em] text-flood backdrop-blur transition-colors duration-200 hover:border-gold hover:text-gold active:scale-[0.98]"
        >
          DOWNLOAD CV
        </a>
      </nav>
    </header>
  );
}
