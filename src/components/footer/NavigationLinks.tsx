export default function NavigationLinks() {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-xl">Customer Services</span>
      <div className="flex flex-col gap-2">
        <a href="/faq" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Frequently Asked Questions
        </a>
        <a href="/purchase-guide" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Purchase and Payment Guide
        </a>
        <a href="/shipping-policies" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Shipping Policies
        </a>
        <a href="/return-conditions" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Return Conditions
        </a>
        <a href="/contact-support" className="hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
          Contact Support
        </a>
      </div>
    </div>
  );
}
