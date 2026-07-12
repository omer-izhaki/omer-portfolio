import type { Config } from "tailwindcss";

// Stadium-night design system: palette lifted from the Road to Global Cup
// game art (royal kit blue, pitch green, trophy gold on deep indigo navy).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stadium: "#0e1433",
        tier: "#1a2350",
        "tier-edge": "#2a3567",
        kit: "#2b57e8",
        pitch: "#2f9e44",
        gold: "#f5b52a",
        "gold-deep": "#c78e14",
        flood: "#eef1fb",
        "flood-dim": "#9aa4c7",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        scoreboard: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
