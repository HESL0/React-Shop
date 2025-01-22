

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center"> 
        <div className="flex items-center"> 
          <a href="/" className="text-xl font-bold"> 
            Herbal Shop 
          </a> 
        </div>
        <div className="relative ml-4"> 
            <input 
              type="text" 
              placeholder="Search for herbs..." 
              className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/cart.png" 
              alt="Cart" 
              className="mr-4 w-6 h-6" 
            />
          </a>
          <div className="flex items-center justify-center rounded-full border-2 font-bold border-slate-950 w-36 h-7 p-2">
            <a href="/" className="flex items-center">
              <span className="text-sm">Sign In</span> 
              <span className="text-sm ml-2">|</span> 
              <span className="text-sm ml-2">Sign Up</span> 
            </a>
          </div>
        
        </div>
      </div>
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
    </nav>
  );
};

export default NavBar;