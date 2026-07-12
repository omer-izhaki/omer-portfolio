// Offer Sheet (Contact): board-7 centered closing over the stadium tunnel
// mood. The Sign me CTA draws a signature stroke on hover (contract-pen
// garment, owned by this section only).
const SOCIALS = [
  { href: "mailto:omer200338@gmail.com", label: "Email", short: "@" },
  {
    href: "https://www.linkedin.com/in/omer-itzhaki-0a587a269/",
    label: "LinkedIn",
    short: "in",
  },
  { href: "https://github.com/omer-izhaki", label: "GitHub", short: "gh" },
  { href: "tel:+972528559227", label: "Phone", short: "tel" },
];

export function OfferSheet() {
  return (
    <section id="offer" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(43,87,232,0.22),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center md:py-40">
        <h2 className="text-4xl font-extrabold tracking-tighter text-flood md:text-6xl">
          Sign me for your team
        </h2>
        <p className="mx-auto mt-4 max-w-[44ch] text-base leading-relaxed text-flood-dim md:text-lg">
          Open to full-time roles and business opportunities. Send the offer sheet,
          I answer fast.
        </p>

        <div className="mt-10 flex justify-center">
          <SignCta />
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-tier-edge bg-tier font-scoreboard text-sm font-semibold text-flood-dim transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:text-gold active:scale-95"
            >
              {s.short}
            </a>
          ))}
        </div>

        <p className="mt-8 font-scoreboard text-xs tracking-[0.14em] text-flood-dim">
          omer200338@gmail.com · 052-855-9227 · Netanya, Israel
        </p>
      </div>

      <footer className="relative border-t border-tier-edge/60 py-6 text-center">
        <p className="font-scoreboard text-[11px] tracking-[0.18em] text-flood-dim">
          OMER IZHAKI · ROAD TO THE GLOBAL CUP, CAREER EDITION
        </p>
      </footer>
    </section>
  );
}

function SignCta() {
  return (
    <a
      href="mailto:omer200338@gmail.com?subject=Offer%20sheet%20for%20Omer"
      className="sign-cta group relative inline-flex flex-col items-center rounded-xl bg-gradient-to-b from-gold to-gold-deep px-9 py-4 text-lg font-bold text-stadium shadow-[0_8px_28px_rgba(245,181,42,0.35)] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97]"
    >
      Sign me
      {/* Signature stroke drawn under the label on hover */}
      <svg
        aria-hidden
        viewBox="0 0 160 22"
        className="pointer-events-none absolute -bottom-2 h-5 w-40"
        fill="none"
      >
        <path
          className="sig-path"
          d="M6 14 C 30 4, 44 20, 64 12 S 104 4, 122 12 S 148 18, 156 8"
          stroke="#eef1fb"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
}
