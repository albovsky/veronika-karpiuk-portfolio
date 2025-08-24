import HeroWithNav from "@/components/sections/HeroWithNav";
import ServiceCards from "@/components/sections/ServiceCards";
import MeetMe from "@/components/sections/MeetMe";
import HearMeOut from "@/components/sections/HearMeOut";
import Testimonials from "@/components/sections/Testimonials";
import MyStyle from "@/components/sections/MyStyle";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="snap-scroll-container">
      <HeroWithNav />
      <div className="snap-section">
        <ServiceCards />
      </div>
      <div className="snap-section">
        <MeetMe />
      </div>
      <div className="snap-section">
        <HearMeOut />
      </div>
      <div className="snap-section">
        <Testimonials />
      </div>
      <div className="snap-section">
        <MyStyle />
      </div>
      <div className="snap-section">
        <Contact />
      </div>
    </div>
  );
}