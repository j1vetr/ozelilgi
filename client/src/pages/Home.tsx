import { HeroSlider } from "@/components/home/HeroSlider";
import { LGSSection } from "@/components/home/LGSSection";
import { Campus360 } from "@/components/home/Campus360";
import { SchoolLevels } from "@/components/home/SchoolLevels";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyBogaziciSection } from "@/components/home/WhyBogaziciSection";
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
        descriptionTR="Çekmeköy'de özel okul arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde anaokulu, ilkokul ve ortaokul kademelerinde 26+ yıllık deneyimle kaliteli eğitim. Hemen ön kayıt yaptırın."
        descriptionEN="Looking for a private school in Çekmeköy? Boğaziçi İlgi Koleji offers quality education at preschool, primary and middle school levels with 26+ years of experience. Pre-register now."
        canonical="/"
        jsonLd={SCHOOL_SCHEMA}
      />
      <HeroSlider />
      <LGSSection />
      <Campus360 />
      <SchoolLevels />
      <StatsSection />
      <WhyBogaziciSection />
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
