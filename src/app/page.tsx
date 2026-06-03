import HeroTranscend from "@/components/HeroTranscend";
import UpcomingEvents from "@/components/UpcomingEvents";
import EventDetail from "@/components/EventDetail";
import AboutGlow from "@/components/AboutGlow";
import TranscendFooter from "@/components/TranscendFooter";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
    <Reveal>
        <HeroTranscend />
      </Reveal>
        <UpcomingEvents />
        <EventDetail />
        <AboutGlow />
        <TranscendFooter />
      
    </>
  );
}