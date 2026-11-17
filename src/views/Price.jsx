import React from 'react';

const Price = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "14.50",
      period: "monthly",
      badgeColor: "bg-violet-500", // اللون البنفسجي الأصلي
      features: [
        { text: "60 GB space", active: true },
        { text: "600 GB transfer", active: true },
        { text: "Pro Design Panel", active: true },
        { text: "15-minute support", active: false },
        { text: "Unlimited Emails", active: false },
        { text: "24/7 Security", active: false }
      ]
    },
    {
      name: "Premium",
      price: "21.50",
      period: "monthly",
      badgeColor: "bg-pink-500", // اللون البينك المميز
      features: [
        { text: "120 GB space", active: true },
        { text: "1200 GB transfer", active: true },
        { text: "Pro Design Panel", active: true },
        { text: "15-minute support", active: true },
        { text: "Unlimited Emails", active: false },
        { text: "24/7 Security", active: false }
      ]
    },
    {
      name: "Advanced",
      price: "42.00",
      period: "monthly",
      badgeColor: "bg-violet-500", // اللون البنفسجي الأصلي
      features: [
        { text: "250 GB space", active: true },
        { text: "5000 GB transfer", active: true },
        { text: "Pro Design Panel", active: true },
        { text: "15-minute support", active: true },
        { text: "Unlimited Emails", active: true },
        { text: "24/7 Security", active: true }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-transparent" id="price">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* العنوان والوصف */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Pricing Plans</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.
          </p>
        </div>

        {/* شبكة الباقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 flex flex-col justify-between text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
            >
              <div>
                {/* اسم الباقة */}
                <p className="text-xl font-bold text-gray-800 mb-6">{plan.name}</p>
                
                {/* صندوق السعر الملون */}
                <div className={`${plan.badgeColor} text-white py-6 rounded-2xl mb-8 shadow-md`}>
                  <p className="text-3xl font-bold flex items-center justify-center">
                    <span className="text-xl mr-1">$</span> {plan.price}
                  </p>
                  <p className="text-xs uppercase tracking-widest mt-1 opacity-90">{plan.period}</p>
                </div>

                {/* تفاصيل والمميزات */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <p 
                      key={fIndex} 
                      className={`text-sm ${feature.active ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}`}
                    >
                      {feature.text}
                    </p>
                  ))}
                </div>
              </div>

              {/* زر الشراء: بنفسجي (violet) وعند الهوفر يقلب بينك */}
              <button className="w-full py-3 bg-violet-500 hover:bg-pink-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md">
                PURCHASE NOW
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Price;