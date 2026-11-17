import cardImage from '../../assets/left-image.png'

const Card = () => {
  return (
    <section className="relative z-20 -mt-32 px-4 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-[35px] shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-24 h-24 rounded-full bg-hover group-hover:bg-primary flex items-center justify-center mb-6 shadow-md transition-all duration-300">
            <img src={cardImage} alt="Modern Strategy" className="w-10 h-10 object-contain filter brightness-0 invert" />
          </div>
          <h3 className="text-brand-black text-xl font-bold mb-3">
            Modern Strategy
          </h3>
          <p className="text-text text-sm leading-relaxed">
            Customize anything in this template to fit your website needs
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[35px] shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-24 h-24 rounded-full bg-hover group-hover:bg-primary flex items-center justify-center mb-6 shadow-md transition-all duration-300">
            <img src={cardImage} alt="Best Relationship" className="w-10 h-10 object-contain filter brightness-0 invert" />
          </div>
          <h3 className="text-brand-black text-xl font-bold mb-3">
            Best Relationship
          </h3>
          <p className="text-text text-sm leading-relaxed">
            Contact us immediately if you have a question in mind
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[35px] shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-24 h-24 rounded-full bg-hover group-hover:bg-primary flex items-center justify-center mb-6 shadow-md transition-all duration-300">
            <img src={cardImage} alt="Ultimate Marketing" className="w-10 h-10 object-contain filter brightness-0 invert" />
          </div>
          <h3 className="text-brand-black text-xl font-bold mb-3">
            Ultimate Marketing
          </h3>
          <p className="text-text text-sm leading-relaxed">
            You just need to tell your friends about our free templates
          </p>
        </div>

      </div>
    </section>
  )
}

export default Card