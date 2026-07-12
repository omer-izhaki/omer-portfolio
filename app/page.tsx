import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { PlayerCard } from "@/components/site/player-card";
import { Fixtures } from "@/components/site/fixtures";
import { Seasons } from "@/components/site/seasons";
import { Training } from "@/components/site/training";
import { TrophyRoom } from "@/components/site/trophy-room";
import { OfferSheet } from "@/components/site/offer-sheet";
import { FootballCursor } from "@/components/site/cursor";
import { MotionRoot } from "@/components/site/motion-root";

// One-page portfolio: the whole page is Omer's game universe. Sections read
// as beats of one match day: main menu, player card, fixtures, seasons,
// training ground, trophy room, offer sheet.
export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-clip">
      <MotionRoot />
      <FootballCursor />
      <SiteNav />
      <main>
        <Hero />
        <PlayerCard />
        <Fixtures />
        <Seasons />
        <Training />
        <TrophyRoom />
        <OfferSheet />
      </main>
    </div>
  );
}
