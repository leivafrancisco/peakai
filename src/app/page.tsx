import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import ServicesSection from "@/components/ServicesSection";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Agents />
      <ServicesSection />
      <Industries />
      <HowItWorks />
      <Integrations />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
