import { BusinessProblemSection } from "./sections/BusinessProblemSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MetricsHighlightSection } from "./sections/MetricsHighlightSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { TechnologyMapSection } from "./sections/TechnologyMapSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Imberr = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <TestimonialsSection />
      <TechnologyMapSection />
      <HeroSection />
      <FooterSection />
      <MetricsHighlightSection />
      <ServicesOverviewSection />
      <BusinessProblemSection />
      <ContactFormSection />
    </div>
  );
};
