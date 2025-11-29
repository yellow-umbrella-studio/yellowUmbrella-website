import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AbousUs";
import OurGames from "@/components/OurGames";
import BuildYourDream from "@/components/BuildYourDream";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurGames />
      <AboutUs />
      <BuildYourDream />
      <ContactUs />
      <Footer />
    </div>
  );
}
