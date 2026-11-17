import left from '../../assets/right-image.png'

const LeftAbout = () => {
  return (
    <section className="relative mt-20 pt-16 px-4 pb-8 animate-[slideFromLeft_1s_ease-out]">
      {/* الخط الفاصل العلوي */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text (النصوص بقت على الشمال هنا في الـ LeftAbout) */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium text-brand-black">
              We can help you to grow your business
            </h3>

            <p className="mt-8 text-text text-normal leading-relaxed">
              Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi,
              a bibendum lectus libero vitae urna.
              Sed id leo eu dolor luctus congue sed eget ipsum.
              Nunc nec luctus libero. Etiam quis dolor elit.
            </p>
          </div>

          {/* Image (الصورة بقت على اليمين في ملف الـ Left) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={left}
              alt="Grow your business"
              className="w-full max-w-xs h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default LeftAbout