export default function NavigationLinks() {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-xl">Customer Services</span>
      <div className="flex flex-col gap-2">
        <a href="" className="hover:text-green-300">
          Frequently Asked Questions
        </a>
        <a href="" className="hover:text-green-300">
          Purchase and Payment Guide
        </a>
        <a href="" className="hover:text-green-300">
          Shipping Policies
        </a>
        <a href="" className="hover:text-green-300">
          Return Conditions
        </a>
        <a href="" className="hover:text-green-300">
          Contact Support
        </a>
      </div>
    </div>
  );
}
