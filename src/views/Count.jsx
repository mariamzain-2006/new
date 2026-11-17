
import circleIcon from '../assets/circle-dec.png'
import bgImage from '../assets/fun-facts-bg.png'

const Count = () => {
  const stats = [
    { number: '126', label: 'Projects' },
    { number: '63', label: 'Happy Clients' },
    { number: '126', label: 'Awards Wins' },
    { number: '27', label: 'Countries' }
  ]

  return (
    <section
      className="py-24 px-4 relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
      id="counter"
    >
      {/* Purple Overlay */}
      

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              {/* Number and Label */}
              <div className="flex flex-col items-center p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </h2>

                <p className="text-lg font-medium opacity-90 max-w-[120px] leading-snug">
                  {stat.label}
                </p>
              </div>

              {/* Separator Icon */}
              {index < stats.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute -right-4 pointer-events-none">
                  <img
                    src={circleIcon}
                    alt="separator"
                    className="w-12 h-auto object-contain"
                  />
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Count
