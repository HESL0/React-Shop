import NavigationLinks from "../footer/NavigationLinks";
import HerbalShop from "../footer/HerbalShop";
import BusinessInformation from "../footer/BusinessInformation";
export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" grid grid-cols-2 lg:pt-12 pt-4 gap-4 lg:gp-6 pb-3 justify-center items-center">
        <div className="grid grid-cols-2">
          <NavigationLinks />
          <HerbalShop />
        </div>

        <BusinessInformation />
      </div>
      <hr/>
      <div className="flex justify-center py-4">
        © 2025 Herbal Shop. All Rights Reserved.
      </div>
    </div>
  );
}
