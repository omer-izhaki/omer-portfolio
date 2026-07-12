// Career Seasons (Experience): board-4 ladder. Two hairline-divided rows with
// monospace season dates, gold badge on the active season. Whole-row hover
// shifts the row grade (the band CTA garment, used as a non-link affordance).
const SEASONS = [
  {
    active: true,
    years: "2026/27",
    title: "IRIS Program",
    role: "AI Developer and Entrepreneur",
    line: "Building AR Technician Assistant: an AI video assistant replacing human experts for military and field technicians with real-time AI and AR guidance.",
  },
  {
    active: false,
    years: "2022/26",
    title: "Israel Defense Forces",
    role: "Head of IT Team (Reserves) and Network Management",
    line: "Led a 5-soldier IT department securing base-wide communication networks, and managed a 5.5 million NIS telecommunications budget with independent procurement.",
  },
  {
    active: false,
    years: "3 SEASONS",
    title: "Maccabi Tzair Youth Movement",
    role: "Youth Mentor",
    line: "Three years leading and mentoring youth groups: the first team I ever coached.",
  },
];

export function Seasons() {
  return (
    <section id="seasons" className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex items-center gap-4">
        <img src="/assets/icon-whistle.png" alt="" aria-hidden className="h-11 w-11 rounded-lg" />
        <h2 className="text-4xl font-extrabold tracking-tighter text-flood md:text-5xl">
          Career seasons
        </h2>
      </div>

      <div className="mt-12 divide-y divide-tier-edge border-y border-tier-edge">
        {SEASONS.map((s) => (
          <div
            key={s.title}
            className="group relative grid gap-2 py-8 transition-colors duration-300 hover:bg-tier/40 md:grid-cols-[9rem_1fr] md:gap-8"
          >
            <div className="flex items-start gap-3">
              <span className="font-scoreboard text-sm font-semibold tracking-[0.14em] text-flood-dim group-hover:text-gold">
                {s.years}
              </span>
              {s.active && (
                <span className="rounded-full border border-gold/50 bg-gold/10 px-2.5 py-0.5 font-scoreboard text-[10px] tracking-[0.18em] text-gold">
                  ACTIVE
                </span>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-flood md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-flood-dim">{s.role}</p>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-flood-dim">
                {s.line}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
