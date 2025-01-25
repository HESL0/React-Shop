
import { useState, useEffect } from "react";
const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-green-600">Herbal Shop</a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for herbs, products, or tips..."
            className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center space-x-6">
          <a href="/cart" className="relative flex items-center">
            <img src="/cart.png" alt="Cart" className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </a>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-sm font-medium text-gray-700 hover:text-green-600">
              Sign In
            </a>
            <a
              href="/register"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <ul className="flex justify-center space-x-8 text-sm font-medium text-gray-500 border-b border-gray-200">
          <li className="hover:text-green-600"><a href="/">Home</a></li>
          <li className="hover:text-green-600"><a href="/articles">Articles</a></li>
          <li className="hover:text-green-600"><a href="/products">Products</a></li>
          <li className="hover:text-green-600"><a href="/courses">Courses</a></li>
          <li className="hover:text-green-600"><a href="/about">About Us</a></li>
          <li className="hover:text-green-600"><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/herobanner.jpg", "/herobanner1.jpg", "/herobanner2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Herbal Shop
        </h1>
        <p className="text-lg mb-6">
          Explore the best herbal products and remedies for a healthy lifestyle.
        </p>
        <a
          href="/shop-now"
          className="bg-green-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700"
        >
          Shop Now
        </a>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentImage === index ? "bg-white border border-green-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HerbalShopHeader = () => {
  return (
    <div>
      <NavBar />
      <HeroBanner />
    </div>
  );
};

export default HerbalShopHeader;
