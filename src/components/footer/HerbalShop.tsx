
export default function HerbalShop() {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-xl">Herbal Shop</span>
      <div className="flex flex-col gap-2">
        <a href="/contact" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Contact Us
        </a>
        <a href="/about" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          About Us
        </a>
        <a href="/jobs" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Job Opportunities
        </a>
        <a href="/privacy-policy" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Privacy Policy
        </a>
        <a href="/magazine" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Herbal Shop Magazine
        </a>
        <a href="/business" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Herbal Shop Business
        </a>
        <a href="/tv" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Herbal Shop TV
        </a>
      </div>
    </div>
  );
}
  