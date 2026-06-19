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
import ResearchDevelopment from "@/Components/ResearchDevelopment";
import Certifications from "@/Components/Certifications";
import Gallery from "@/Components/Gallery";
import FAQs from "@/Components/FAQs";
import ContractManufacturing from "@/Components/ContractManufacturing";
import ThirdPartyManufacturing from "@/Components/ThirdPartyManufacturing";
import ExportServices from "@/Components/ExportServices";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    {/* <ProductSection/> */}
    <ManufacturingDivisions/>
    <Services/>
    <ContractManufacturing/>
    <ThirdPartyManufacturing/>
    <ResearchDevelopment/>
    <QualityCompliance/>
    <Certifications/>
    <ExportServices/>
    <Gallery/>
    <FAQs/>
    {/* <WhyChooseUs/> */}
    {/* <ManufacturingProcess/> */}
    {/* <GlobalReach/> */}
    {/* <CTA/> */}
    <Contact/>
    </>
  );
}
