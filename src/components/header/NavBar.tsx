import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-green-600">Herbal Shop</a>
        <div className="relative hidden sm:block">
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

        <button
          className="sm:hidden text-gray-700"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className={`bg-gray-100 sm:block ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex sm:flex-row flex-col justify-center space-x-8 sm:space-x-8 text-sm font-medium text-gray-500 border-b border-gray-200">
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

export default NavBar;
