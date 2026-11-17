import React from 'react';
import testi from '../assets/testimonial-icon.png';

const Testimonials = () => {
  const testimonialData = [
    {
      quote: "Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.",
      name: "Catherine Soft",
      role: "Managing Director"
    },
    {
      quote: "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
      name: "Kelvin Wood",
      role: "Digital Marketer"
    },
    {
      quote: "Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.",
      name: "David Martin",
      role: "Website Manager"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative z-10" id="testi">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* العنوان والوصف */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900">What do they say?</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.
          </p>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl flex flex-col justify-between text-center items-center transition-transform duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="flex flex-col items-center">
                <img src={testi} alt="testimonial icon" className="w-10 h-10 mb-6 object-contain" />
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              <div className="w-full pt-4">
                <h5 className="font-bold text-lg text-gray-900">{item.name}</h5>
                <p className="text-sm text-pink-500 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;