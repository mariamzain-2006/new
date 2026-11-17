import React from 'react';
import rocket from '../assets/work-process-item-01.png';
import bgImage from '../assets/work-process-bg.png';

const Work = () => {
  return (
    <section 
      className="py-20 px-4 relative bg-cover bg-center bg-no-repeat rounded-3xl my-8" 
      style={{ backgroundImage: `url(${bgImage})` }}
      id="work"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* العنوان والوصف (بدون شادو للخلفية أو السكشن) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Work Process</h3>
          <p className="mt-4 max-w-xl mx-auto text-gray-800 font-medium">
            Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.
          </p>
        </div>

        {/* شبكة الكروت الـ 6 مع شادو قوي جداً وبارز */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)' }}
            >
              {/* أيقونة الصاروخ */}
              <img src={rocket} alt="rocket icon" className="w-12 h-12 mb-4 object-contain" />
              <h5 className="font-bold text-lg text-gray-900 mb-2">Get Ideas</h5>
              <p className="text-sm text-gray-600">Godard pasbst parism fam cliche.</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;