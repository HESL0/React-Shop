const SearchBar = () => {
    return (
      <div className="relative ml-4">
        <input
          type="text"
          placeholder="Search for herbs..."
          className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchBar;
  