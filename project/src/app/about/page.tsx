import { Header } from "@/components/Header";
import { AboutUs } from "@/sections/AboutUs";
import { CoreValues } from "@/sections/CoreValues";
import { WhoWeAre } from "@/sections/WhoWeAre";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "../globals.css";

export default function About() {
  return (
    <>
      <Header />
      <div id="about">
        <AboutUs />
      </div>
      <div id="corevalues">
        <CoreValues />
      </div>
      <div id="our-team">
        <WhoWeAre />
      </div>
      <CallToAction />
      <Footer />
    </>
  );
}