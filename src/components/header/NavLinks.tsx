const NavLinks = () => {
    return (
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
    );
  };
  
  export default NavLinks;
  