import HeroSection from "./components/HeroSection";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import ProductPage from "./products/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductPage />
      <Newsletter />
      <Footer />
    </>
  );
}
