import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        
        {/* عنوان السكشن */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Talk To Us</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.
          </p>
        </div>

        {/* محتوى السكشن (معلومات التواصل + الفورم) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* الجانب الأيسر (معلومات التواصل) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Keep in touch</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.
            </p>
          </div>

          {/* الجانب الأيمن (نموذج الإرسال) */}
          <div className="lg:col-span-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* حقلين الاسم والإيميل */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all text-gray-700 bg-gray-50/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="E-Mail Address" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all text-gray-700 bg-gray-50/50"
                  />
                </div>
              </div>

              {/* حقل الرسالة */}
              <div>
                <textarea 
                  rows="5" 
                  placeholder="Your Message" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all text-gray-700 bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              {/* زرار الإرسال (بنفسجي يقلب بينك عند الهوفر) */}
              <div>
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-violet-500 hover:bg-pink-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;