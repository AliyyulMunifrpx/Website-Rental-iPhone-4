import MainLayout from "../components/layouts/main-layout.jsx";
import HeroSection from "../components/home/hero-section.jsx";
import RecommendationSection from "../components/home/recommendation-section.jsx";
import BenefitSection from "../components/home/benefits-section.jsx";
import HowItWorksSection from "../components/home/how-it-work-section.jsx";
import TestimonialSection from "../components/home/testimonials-section.jsx";
import FAQSection from "../components/home/faq-section.jsx";
import CtaSection from "../components/home/cta-section.jsx";
import { store } from "../data/store.js";
export const metadata = {
  title: `Sewa iPhone di ${store.city} | ${store.name} `,
  description: `Sewa iPhone di  ${store.city} mulai dari Rp50 ribu. Pilih iPhone dan aksesoris untuk ngonten, bisnis, liburan, atau kebutuhan lainnya.`,
};
export default function Home() {
  return (
    <MainLayout>
      <HeroSection></HeroSection>
      <RecommendationSection></RecommendationSection>
      <BenefitSection></BenefitSection>
      <HowItWorksSection></HowItWorksSection>
      <TestimonialSection></TestimonialSection>
      <CtaSection></CtaSection>
      <FAQSection></FAQSection>
    </MainLayout>
  );
}
