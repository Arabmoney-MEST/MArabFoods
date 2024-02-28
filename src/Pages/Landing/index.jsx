import Navbar from "../../components/navbar/Navbar";
import AboutUs from "../../components/about-us";
import Footer from "../../components/footer";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    
      <AboutUs />
      <Products />
      <Footer />
    </div>
  );
};

export default LandingPage;
