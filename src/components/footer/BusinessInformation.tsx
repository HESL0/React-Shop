export default function BusinessInformation() {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-xl">
        Stay connected—find us on social media.
      </span>
      <div className="flex flex-col items-center gap-2">
        <span>We're here for you 7 days a week, from 8:00 AM to 8:00 PM!</span>
        <a href="tel:+18007654321" className="hover:text-green-300">
          Get in Touch: Call us at +1 (800) 765-4321
        </a>
      </div>
    </div>
  );
}
