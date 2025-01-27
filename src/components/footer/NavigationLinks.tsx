export default function NavigationLinks() {
  return (
    <div className="flex flex-col gap-8 ml-6">
      <span className="font-bold">Customer Services</span>
      <div className="flex flex-col gap-4 ">
        <a className="hover:text-green-300" href="">Frequently Asked Questions</a>
        <a className="hover:text-green-300" href="">Purchase and Payment Guide</a>
        <a className="hover:text-green-300" href="">Shipping Policies</a>
        <a className="hover:text-green-300" href="">Return Conditions</a>
        <a className="hover:text-green-300" href="">Contact Support</a>
      </div>
    </div>
  );
}
