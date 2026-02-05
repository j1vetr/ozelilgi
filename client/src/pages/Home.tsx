import { HeroSlider } from "@/components/home/HeroSlider";
import { FeaturesShowcase } from "@/components/home/FeaturesShowcase";
import { SchoolLevels } from "@/components/home/SchoolLevels";
import { FacilitiesGallery } from "@/components/home/FacilitiesGallery";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsScroll } from "@/components/home/TestimonialsScroll";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      <HeroSlider />
      <FeaturesShowcase />
      <SchoolLevels />
      <FacilitiesGallery />
      <StatsSection />
      <TestimonialsScroll />
      <CTASection />
    </div>
  );
}
