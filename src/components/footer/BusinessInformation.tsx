export default function BusinessInformation() {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-xl mb-2">
        Stay connected—find us on social media.
      </span>
      <div className="flex items-center space-x-4 mb-4">
        <a href="https://facebook.com/herbalshop" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          <img src="/Facebook.svg" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com/herbalshop" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          <img src="/Instagram.svg" alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>We're here for you 7 days a week, from 8:00 AM to 8:00 PM!</span>
        <a href="tel:+18007654321" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Get in Touch: Call us at +1 (800) 765-4321
        </a>
      </div>
    </div>
  );
}
