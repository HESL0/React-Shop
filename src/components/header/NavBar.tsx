import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/products", label: "Products" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-green-600 tracking-tight focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Herbal Shop
        </a>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:block flex-1 mx-8">
          <input
            type="text"
            placeholder="Search for herbs, products, or tips..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            aria-label="Search"
          />
        </div>

        {/* User/Cart */}
        <div className="flex items-center space-x-4">
          <a href="/cart" className="relative flex items-center focus:outline-none focus:ring-2 focus:ring-green-500 rounded" aria-label="Cart">
            <img src="/cart.png" alt="Cart" className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">3</span>
          </a>
          <a href="/login" className="hidden sm:inline text-sm font-medium text-gray-700 hover:text-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Sign In
          </a>
          <a
            href="/register"
            className="hidden sm:inline bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </a>
        </div>

        {/* Burger Menu */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:block border-t border-gray-100">
        <ul className="flex justify-center space-x-8 py-2 text-base font-medium text-gray-600">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <a href="/" className="text-xl font-bold text-green-600" onClick={handleLinkClick}>
            Herbal Shop
          </a>
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-6 py-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-lg font-medium text-gray-700 hover:text-green-600 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <hr className="my-2" />
          <a href="/login" className="block text-base font-medium text-gray-700 hover:text-green-600 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
            Sign In
          </a>
          <a
            href="/register"
            className="block bg-green-600 text-white text-center px-4 py-2 rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
