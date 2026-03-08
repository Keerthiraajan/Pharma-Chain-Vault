import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Workflow from '../Components/Workflow';

const LandingPage = () => {
  return (
    <>
      <Navbar />

       <section id="platform">
        <HeroSection />
      </section>

      <section id="how-it-works">
        <Workflow />
      </section>

      <section id="about-us">
        <Footer />
      </section> 
    </>
  );
};

export default LandingPage;
