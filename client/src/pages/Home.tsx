import { HeroSlider } from "@/components/home/HeroSlider";
import { SchoolLevels } from "@/components/home/SchoolLevels";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyBogaziciSection } from "@/components/home/WhyBogaziciSection";
import { FAQSection } from "@/components/home/FAQSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { GuidesSection } from "@/components/home/GuidesSection";
import { VideoSlider } from "@/components/home/VideoSlider";
import { TestimonialsScroll } from "@/components/home/TestimonialsScroll";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { HashtagStrip } from "@/components/home/HashtagStrip";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead, SCHOOL_SCHEMA } from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      <SEOHead
        titleTR="Özel Boğaziçi İlgi Koleji Çekmeköy | Anaokulu, İlkokul ve Ortaokul"
        titleEN="Özel Boğaziçi İlgi Koleji Çekmeköy | Preschool, Primary & Middle School"
        descriptionTR="Çekmeköy'de anaokulundan ortaokula uzanan bütüncül eğitim yolculuğu. Boğaziçi Vizyonuyla Geleceğe. Özel Boğaziçi İlgi Koleji'nde hemen ön kayıt yaptırın."
        descriptionEN="A holistic educational journey from kindergarten to middle school in Çekmeköy. Towards the Future with the Boğaziçi Vision. Pre-register now at Özel Boğaziçi İlgi Koleji."
        canonical="/"
        jsonLd={SCHOOL_SCHEMA}
      />
      <HeroSlider />
      <WhyBogaziciSection />
      <StatsSection />
      <FAQSection />
      <SchoolLevels />
      <AnnouncementsSection />
      <GuidesSection />
      <VideoSlider />
      <TestimonialsScroll />
      <PhotoGallery />
      <HashtagStrip />
      <CTASection />
    </div>
  );
}
