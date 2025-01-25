import HeroSection from "./HeroSection";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import SpecialOffers from "./SpecialOffers";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
import Newsletter from "./Newsletter";

export default function Body() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <div className="w-full max-w-6xl mx-auto p-4">
        <Categories />
        <FeaturedProducts />
        <SpecialOffers />
        <Testimonials />
        <BlogSection />
        <Newsletter />
      </div>
    </div>
  );
}
