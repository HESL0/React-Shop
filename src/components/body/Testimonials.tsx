const testimonials = [
    { name: "John Doe", feedback: "The best herbal shop I've ever visited!", image: "/images/customer1.png" },
    { name: "Jane Smith", feedback: "I love their organic soaps. Highly recommend!", image: "/images/customer2.png" },
  ];
  
  export default function Testimonials() {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mx-auto mb-4" />
              <p className="text-green-700 italic">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-bold text-green-800 mt-4">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  