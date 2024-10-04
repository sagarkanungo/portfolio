import AboutSection from "@/components/aboutSection/AboutSection";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/conatact/Contact";
import Footer from "@/components/footer/Footer";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import Skill from "@/components/skill/Skill";
import Image from "next/image";

export default function Home() {
  return (
<div className="flex-col-1 justify-around">
 <Banner/>
 <AboutSection/>
 <Skill/>
 <ServiceSection/>
 <Contact/>
 <Footer/>
</div>
  );
}
