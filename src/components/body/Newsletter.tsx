export default function Newsletter() {
    return (
      <div className="mt-12 bg-green-100 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-900">Subscribe to Our Newsletter</h2>
        <p className="mt-4 text-green-700">Stay updated on the latest offers and articles.</p>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-green-300 rounded-l-lg"
          />
          <button className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>
    );
  }
  