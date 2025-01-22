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
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-6">
        <div
          onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
          className="w-12 h-12 bg-white bg-opacity-60 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:bg-gray-300"
        >
          <span className="text-black text-2xl">←</span>
        </div>
        <div
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          className="w-12 h-12 bg-white bg-opacity-60 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:bg-gray-300"
        >
          <span className="text-black text-2xl">→</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 m-2 rounded-full ${currentImage === index ? "bg-white border-2 w-10 border-gray-500" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
