import About from "@/Components/About";
import CTA from "@/Components/CTA";
import Contact from "@/Components/Contact";
import GlobalReach from "@/Components/GlobalReach";
import Hero from "@/Components/Hero";
import ManufacturingDivisions from "@/Components/ManufacturingDivisions";
import ManufacturingProcess from "@/Components/ManufacturingProcess";
import ProductSection from "@/Components/ProductSection";
import QualityCompliance from "@/Components/QualityCompliance";
import Services from "@/Components/Services";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    {/* <ProductSection/> */}
    <ManufacturingDivisions/>
    <QualityCompliance/>
    <Services/>
    <WhyChooseUs/>
    <ManufacturingProcess/>
    <GlobalReach/>
    <CTA/>
    <Contact/>
    </>
  );
}
