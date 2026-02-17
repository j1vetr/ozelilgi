import { HeroSlider } from "@/components/home/HeroSlider";
import { Campus360 } from "@/components/home/Campus360";
import { SchoolLevels } from "@/components/home/SchoolLevels";
import { VideoSlider } from "@/components/home/VideoSlider";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsScroll } from "@/components/home/TestimonialsScroll";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      <HeroSlider />
      <Campus360 />
      <FacilitiesSection />
      <SchoolLevels />
      <AnnouncementsSection />
      <VideoSlider />
      <StatsSection />
      <TestimonialsScroll />
      <CTASection />
    </div>
  );
}
