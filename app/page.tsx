import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Attorney from "./components/home/Attorney";
import FinalCTA from "./components/home/finalCTA";
import Hero from "./components/home/hero";
import PracticeAreas from "./components/home/practiceAreas";
import Resources from "./components/home/resources";
import Testimonials from "./components/home/testimonials";
import TrustBar from "./components/home/trustBar";
import WhyChoose from "./components/home/whyChooseUs";


export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <PracticeAreas />
      <WhyChoose />
      <Attorney />
      <Testimonials />
      <Resources />
      <FinalCTA />
      <Footer />
    </>
  );
}
