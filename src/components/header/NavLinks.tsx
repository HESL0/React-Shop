import { useState } from "react";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        className="sm:hidden text-gray-700 p-4"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden fixed top-0 left-0 w-3/4 bg-white h-full z-50 transition-all duration-300 ease-in-out shadow-md`}
      >
        <ul className="flex flex-col items-center space-y-6 mt-12">
          <li className="text-xl font-medium text-gray-700 hover:text-gray-900">
            <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li className="text-xl font-medium text-gray-700 hover:text-gray-900">
            <a href="/articles" onClick={() => setIsMenuOpen(false)}>Articles</a>
          </li>
          <li className="text-xl font-medium text-gray-700 hover:text-gray-900">
            <a href="/products" onClick={() => setIsMenuOpen(false)}>Products</a>
          </li>
          <li className="text-xl font-medium text-gray-700 hover:text-gray-900">
            <a href="/courses" onClick={() => setIsMenuOpen(false)}>Courses</a>
          </li>
          <li className="text-xl font-medium text-gray-700 hover:text-gray-900">
            <a href="/about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          </li>
          <li className="text-xl font-medium text-gray-700 hover:text-gray-900">
            <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </li>
        </ul>
      </div>

      <div
        className={`transition-all ${
          isMenuOpen ? "ml-3/4" : "ml-0"
        } duration-300 ease-in-out`}
      >
        <div className="bg-gray-100">
          <ul className="flex justify-center text-sm font-medium text-gray-500 border-b border-gray-200">
            <li className="px-4 py-2 hover:text-gray-700">
              <a href="/">Home</a>
            </li>
            <li className="px-4 py-2 hover:text-gray-700">
              <a href="/articles">Articles</a>
            </li>
            <li className="px-4 py-2 hover:text-gray-700">
              <a href="/products">Products</a>
            </li>
            <li className="px-4 py-2 hover:text-gray-700">
              <a href="/courses">Courses</a>
            </li>
            <li className="px-4 py-2 hover:text-gray-700">
              <a href="/about">About Us</a>
            </li>
            <li className="px-4 py-2 hover:text-gray-700">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
