export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white mt-14 sm:mt-20 md:mt-24 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-16"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-pink-200/30 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-start">

        {/* Left Content */}
        <div>

          {/* Heading */}
          <div className="mb-6 leading-none">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black">
              Aaruchudar
            </h2>

            <p className="mt-2 ml-1 text-[11px] sm:text-sm md:text-base font-bold tracking-[0.18em] sm:tracking-[0.3em] uppercase text-[#C9A227]">
              Private Limited
            </p>
          </div>

          <p className="text-gray-800 text-base sm:text-lg font-semibold leading-relaxed mb-5">
            Aaruchudar is a cognitive development platform that enhances
            human intelligence through neuroscience-based, real-world
            learning – helping individuals and teams build clarity,
            better decisions, and stronger performance.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We work where most systems don’t – inside the mind.
          </p>

        </div>

        {/* Right Content Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100">

          <div className="space-y-6">

            <div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">
                What We Do
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We work on improving how people actually think in real life.
                Through structured, neuroscience-based activities,
                individuals and teams learn to move from confusion to clarity,
                from hesitation to decision, and from knowledge to real performance.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">
                Our Purpose
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To develop human intelligence in the age of AI by
                strengthening how individuals and teams think,
                decide, and perform in real-world situations.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-2">
                Our Direction
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To become a leading cognitive infrastructure platform
                that transforms how people think, learn, and perform
                across education and organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">

              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-black">
                  Human
                </h4>

                <p className="text-sm text-gray-500 font-semibold">
                  Intelligence Focus
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}