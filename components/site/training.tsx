// Training Ground (Skills): board-5 bento, exactly six cells, generated icon
// set (sliced from the brand icon sheet), tint variation per the board:
// one pitch-green cell, one kit-blue cell, the rest tier panels.
const CELLS = [
  {
    icon: "/assets/icon-playbook.png",
    title: "Languages",
    items: "Python, C, C++, Java, TypeScript, C#, MQL5, SQL",
    tone: "green" as const,
  },
  {
    icon: "/assets/icon-ball.png",
    title: "AI Tooling",
    items: "Claude Code, Gemini, Cursor, Codex",
    tone: "panel" as const,
  },
  {
    icon: "/assets/icon-boot.png",
    title: "Frameworks",
    items: "React Native, React 19, FastAPI, PyTorch, Unity 6",
    tone: "panel" as const,
  },
  {
    icon: "/assets/icon-stopwatch.png",
    title: "Cloud and Infra",
    items: "AWS EC2, GCP, Docker, GitHub Actions, Linux, ZeroMQ",
    tone: "blue" as const,
  },
  {
    icon: "/assets/icon-shield.png",
    title: "Security",
    items: "Applied cryptography, network security, defensive programming",
    tone: "panel" as const,
  },
  {
    icon: "/assets/icon-handshake.png",
    title: "Leadership",
    items: "5-soldier team, budget ownership, youth mentoring",
    tone: "panel" as const,
  },
];

const TONES = {
  green: "border-pitch/60 bg-gradient-to-br from-pitch/25 to-tier",
  blue: "border-kit/60 bg-gradient-to-br from-kit/30 to-tier",
  panel: "border-tier-edge bg-tier",
};

export function Training() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <h2 className="text-4xl font-extrabold tracking-tighter text-flood md:text-5xl">
        Training ground
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CELLS.map((c) => (
          <div
            key={c.title}
            className={`rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1 ${TONES[c.tone]}`}
          >
            <img src={c.icon} alt="" aria-hidden className="h-12 w-12 rounded-lg" />
            <h3 className="mt-4 text-lg font-bold tracking-tight text-flood">{c.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-flood-dim">{c.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
