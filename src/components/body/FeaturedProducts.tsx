const products = [
    { name: "Aloe Vera Gel", price: "$12.99", image: "/images/aloe-vera-gel.png" },
    { name: "Lavender Oil", price: "$8.99", image: "/images/lavender-oil.png" },
    { name: "Chamomile Tea", price: "$6.99", image: "/images/chamomile-tea.png" },
  ];
  
  export default function FeaturedProducts() {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 text-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
              <p className="text-green-700">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  