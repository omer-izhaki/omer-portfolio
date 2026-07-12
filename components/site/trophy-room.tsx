// Trophy Room (Education): board-6 inverted classic. Cinematic trophy shelf
// image on the start side, silverware copy on the end side.
export function TrophyRoom() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <img
          src="/assets/trophy-shelf.png"
          alt="Golden trophies on a clubhouse shelf under warm spotlights"
          className="aspect-[3/2] w-full rounded-2xl border border-tier-edge object-cover shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
        />

        <div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-flood md:text-5xl">
            Trophy room
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <img src="/assets/icon-trophy.png" alt="" aria-hidden className="h-11 w-11 rounded-lg" />
            <p className="font-scoreboard text-sm font-semibold tracking-[0.1em] text-gold">
              SHIPPED ON THE APP STORE
            </p>
          </div>

          <div className="mt-6 border-s-2 border-gold/60 ps-5">
            <h3 className="text-xl font-bold tracking-tight text-flood">
              BSc Computer Science, Cybersecurity specialization
            </h3>
            <p className="mt-1 text-sm text-flood-dim">
              The Open University of Israel. 78 credit points completed, GPA 85,
              graduating summer 2027. Next up: an MBA to pair the engineering with strategy.
            </p>
          </div>

          <p className="mt-8 font-scoreboard text-5xl font-semibold tracking-tight text-tier-edge">
            2027
          </p>
        </div>
      </div>
    </section>
  );
}
