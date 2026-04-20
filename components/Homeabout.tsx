export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white mt-24 py-24 px-8 md:px-16"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left Content */}
        <div>
          {/* Heading */}
          <div className="mb-6 leading-none">
            <h2 className="text-5xl md:text-6xl font-black text-black">
              Aaruchudar
            </h2>

            <p className="mt-2 ml-1 text-sm md:text-base font-bold tracking-[0.35em] uppercase text-[#C9A227]">
              Private Limited
            </p>
          </div>

          

          <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-5">
            Aaruchudar operates in the human intelligence and decision
            architecture domain, helping people think clearly, decide wisely,
            act consciously, and lead effectively in real-world environments.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We combine experiential labs, behavioural frameworks, and cognitive
            activations to build strong thinking systems — not therapy, not
            diagnosis, but real performance transformation.
          </p>

        </div>

        {/* Right Content Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100">

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-black text-black mb-2">
                What We Build
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Decision systems, thinking structures, and intelligence
                interfaces that intervene — not just measure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-black mb-2">
                Our Goal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To create clarity, original thinking, and conscious action in an
                AI-driven world.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-black mb-2">
                Who We Serve
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Students, professionals, founders, and institutions seeking
                direction, depth, and stronger decision-making capacity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-4">
              <div>
                <h4 className="text-3xl font-black text-black">Human</h4>
                <p className="text-sm text-gray-500 font-semibold">
                  Intelligence Focus
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-black">AI+</h4>
                <p className="text-sm text-gray-500 font-semibold">
                  Future Ready Systems
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}