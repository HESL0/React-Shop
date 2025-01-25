import { useState, useEffect } from "react";

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
    <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to Herbal Shop
        </h1>
        <p className="text-lg sm:text-xl mb-6">
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

export default HeroBanner;
