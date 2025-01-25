const blogs = [
    { title: "5 Benefits of Herbal Teas", image: "/images/herbal-teas.png", link: "#" },
    { title: "Essential Oils for Skin Care", image: "/images/essential-oils.png", link: "#" },
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
  