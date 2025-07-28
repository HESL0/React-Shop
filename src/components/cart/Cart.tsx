import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

const initialCart: Product[] = [];

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>(initialCart);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");


  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setToastMessage(`Item removed from cart`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Added addToCart function to fix missing function error
  // Removed unused addToCart declaration to fix TS6133 error

  return (
    <>
      <div className="fixed top-16 right-4 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
        <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out">
          {toastMessage}
        </div>
      )}
    </>
  );
}
