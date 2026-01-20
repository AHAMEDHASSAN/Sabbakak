import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
