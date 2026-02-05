import { HeroSlider } from "@/components/home/HeroSlider";
import { FeaturesShowcase } from "@/components/home/FeaturesShowcase";
import { SchoolLevels } from "@/components/home/SchoolLevels";
import { VideoSlider } from "@/components/home/VideoSlider";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsScroll } from "@/components/home/TestimonialsScroll";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      <HeroSlider />
      <FeaturesShowcase />
      <SchoolLevels />
      <VideoSlider />
      <FacilitiesSection />
      <StatsSection />
      <TestimonialsScroll />
      <CTASection />
    </div>
  );
}
