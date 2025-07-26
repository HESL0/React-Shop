import { useContext } from "react";
import { CartContext } from "../cart/CartContext";

const products = [
  { id: 1, name: "Aloe Vera Gel", price: "$12.99", quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wrVdBEVluQOIax-LpWO9Spg8MrFWxMcZfw&s" },
  { id: 2, name: "Lavender Oil", price: "$8.99", quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3ousyYSWhT1cNnh6lOdxtD_clEpw6hsLcw&s" },
  { id: 3, name: "Chamomile Tea", price: "$6.99", quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwfn2G1w3dDnLjkMCyuqhQp4hv9MZneIihw&s" },
];

export default function FeaturedProducts() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
            <p className="text-green-700 mb-4">{product.price}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
              <button
                className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                aria-label={`View details of ${product.name}`}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
