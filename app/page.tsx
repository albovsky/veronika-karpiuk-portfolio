import HeroWithNav from "@/components/sections/HeroWithNav";
import ServiceCards from "@/components/sections/ServiceCards";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="snap-scroll-container">
      <HeroWithNav />
      <div id="content-sections" className="snap-section">
        <ServiceCards />
        <Testimonials />
      </div>
    </div>
  );
}