import { Header } from "@/components/Header";
import { Dashboard } from "@/sections/Dashboard";
import { Services } from "@/sections/Services";
import { CompanyHighlights } from "@/sections/CompanyHighlights";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Services />
      <CompanyHighlights />
      <LogoTicker />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}