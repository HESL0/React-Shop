const categories = [
    { title: "Herbal Creams", image: "/images/herbal-creams.png" },
    { title: "Essential Oils", image: "/images/essential-oils.png" },
    { title: "Herbal Teas", image: "/images/herbal-teas.png" },
    { title: "Organic Soaps", image: "/images/organic-soaps.png" },
  ];
  
  export default function Categories() {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 text-center">
              <img src={category.image} alt={category.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  