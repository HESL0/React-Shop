const blogs = [
    { title: "5 Benefits of Herbal Teas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_fPnEb-2Te00SCVV6T-waZvRUb8Vt2wv4g&s", link: "#" },
    { title: "Essential Oils for Skin Care", image: "https://en.ohmycream.com/cdn/shop/collections/201705_Collection_Visage_378fee5a-cba7-44bd-9d5c-752d45d42f5a_grande.jpg?v=1614244957", link: "#" },
  ];
  
  export default function BlogSection() {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800">{blog.title}</h3>
                <a href={blog.link} className="text-green-600 hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  