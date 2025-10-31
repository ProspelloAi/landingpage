import CallToAction from "../sections/CallToAction";
import Faqs from "../sections/Faqs";
import Industries from "../sections/Industries";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Testimonials from "../sections/testimonials";
// import Introduction from "../sections/Introduction";
// import LogoTicker from "../sections/LogoTicker";
import Navbar from "../sections/Navbar";
import Vision from "../sections/Vision";
import Process from "../sections/Process";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CallToAction />
      <Vision />
      <CallToAction />
      {/* <LogoTicker /> */}
      {/* <Introduction /> */}
      <Industries />
      <Process />
      <Testimonials />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
