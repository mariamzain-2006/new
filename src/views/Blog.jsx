import React from 'react';
import entry01 from '../assets/blog-item-01.png';
import entry02 from '../assets/blog-item-02.png';
import entry03 from '../assets/blog-item-03.png';

const Blog = () => {
  const blogs = [
    {
      image: entry01,
      title: "Vivamus ac vehicula dui",
      text: "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue."
    },
    {
      image: entry02,
      title: "Phasellus convallis augue",
      text: "Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis."
    },
    {
      image: entry03,
      title: "Nam gravida purus non",
      text: "Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="blog">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* عنوان السكشن */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Blog Entries</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.
          </p>
        </div>

        {/* كروت المدونة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
            >
              <div>
                {/* صورة المقال */}
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>

                {/* عنوان المقال: بيلون بينك عند الهوفر */}
                <h5 className="mb-4">
                  <a 
                    href="#blog" 
                    className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-pink-500"
                  >
                    {blog.title}
                  </a>
                </h5>

                {/* نص المقال */}
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {blog.text}
                </p>
              </div>

              {/* زرار Read More: بنفسجي يقلب بينك عند الهوفر */}
              <button className="w-full py-3 bg-violet-500 hover:bg-pink-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md">
                READ MORE
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default Blog;