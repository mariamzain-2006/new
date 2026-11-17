import React from 'react';
import You11 from '../assets/text-logo.png';

const Footer = () => {
  return (
    <footer className="text-white py-16 px-4 text-center relative" style={{ backgroundColor: '#5c52a2' }} id="footer">
      <div className="max-w-6xl mx-auto">
        
        {/* أيقونات التقنيات بحجم كبير وواضح */}
        <div className="flex justify-center items-center space-x-8 mb-8 text-5xl">
          <i className='bx bxl-html5 hover:text-pink-300 transition-colors cursor-pointer'></i>
          <i className='bx bxl-sass hover:text-pink-300 transition-colors cursor-pointer'></i>
          <i className='bx bxl-react hover:text-pink-300 transition-colors cursor-pointer'></i>
          <i className='bx bxl-javascript hover:text-pink-300 transition-colors cursor-pointer'></i>
          <i className='bx bxs-file-json hover:text-pink-300 transition-colors cursor-pointer'></i>
        </div>

        {/* خط فاصل شفاف */}
        <hr className="border-white/20 mb-8 max-w-4xl mx-auto" />

        {/* حقوق النشر وصورة اللوجو بحجم كبير ومناسب */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 text-sm md:text-base font-medium">
          <span>COPYRIGHT © 2023 SOFTY PINKO COMPANY - DESIGN:</span>
          <img 
            src={You11} 
            alt="Design Logo" 
            className="h-10 inline-block object-contain bg-white/10 px-3 py-1.5 rounded-lg" 
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;