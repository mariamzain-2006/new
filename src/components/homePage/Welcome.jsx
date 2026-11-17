import heroImage from '../../assets/work-process-bg.png'

const Welcome = () => {
  return (
    <section 
      id="welcome"
      style={{ backgroundImage: `url(${heroImage})` }}
      className="relative bg-cover bg-center text-brand-white py-28 md:py-40 px-4 text-center overflow-hidden min-h-[500px] md:min-h-[650px] flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          We provide the best strategy
          <br />
          to grow up your business
        </h1>

        <p className="text-sm md:text-base text-brand-white/90 max-w-xl mb-8">
          Softy Pinko is a professional Bootstrap 4.0 theme designed by
          Template Mo for your company at absolutely free of charge.
        </p>

        <button className="bg-brand-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition duration-300">
          Discover More
        </button>
      </div>
    </section>
  )
}

export default Welcome