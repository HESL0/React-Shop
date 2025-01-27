import NavigationLinks from "../footer/NavigationLinks";
import HerbalShop from "../footer/HerbalShop";
import BusinessInformation from "../footer/BusinessInformation";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
        <NavigationLinks />
        <hr className="border-gray-700 md:hidden" />
        <HerbalShop />
        <hr className="border-gray-700 md:hidden" />
        <BusinessInformation />
      </div>
      <hr className="border-gray-700" />
      <div className="flex justify-center py-4">
        © 2025 Herbal Shop. All Rights Reserved.
      </div>
    </div>
  );
}
