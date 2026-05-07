'use client'

import Footer from "@/components/Footer"

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      desc: 'Custom AI systems, automation workflows, predictive analytics and intelligent decision engines for modern businesses.',
    },
    {
      title: 'Neuro Technology',
      desc: 'Brain-computer interfaces, cognitive systems and future-focused neuro innovation built for real impact.',
    },
    {
      title: 'Software Development',
      desc: 'Scalable web, mobile and enterprise software engineered with premium architecture and performance.',
    },
    {
      title: 'Research & Innovation',
      desc: 'R&D labs focused on emerging technology, product experiments and disruptive future solutions.',
    },
    {
      title: 'Learning Systems',
      desc: 'Smart learning ecosystems, adaptive education platforms and training technology solutions.',
    },
    {
      title: 'Consulting',
      desc: 'Strategy, digital transformation, technology roadmaps and operational excellence consulting.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

       

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[11px] sm:text-sm mb-4 sm:mb-5 text-white/70">
            Aaruchudar Services
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            Building the Future Through Technology.
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-7 sm:leading-8">
            We combine innovation, intelligence and engineering excellence
            to create products and systems that transform industries.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6">

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 md:hover:-translate-y-2"
            >

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
                0{index + 1}
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                {item.desc}
              </p>

             

            </div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 bg-white">

        <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-6 sm:p-10 md:p-16 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">

          <div>

            <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[11px] sm:text-sm text-white/70 mb-4">
              Why Choose Us
            </p>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Innovation with Real Results.
            </h3>

          </div>

          <div className="space-y-3 sm:space-y-4 text-white/90 text-base sm:text-lg leading-7 sm:leading-8">

            <p>• Enterprise-grade engineering standards</p>
            <p>• Human-centered product design</p>
            <p>• AI-first future-ready systems</p>
            <p>• Trusted execution and long-term support</p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 text-center bg-[#f5f5f5]">

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Let’s Build Something Great
        </h3>

        <p className="mt-5 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-7 sm:leading-8">
          Partner with Aaruchudar to create intelligent solutions for tomorrow.
        </p>


      </section>
      <Footer />

    </main>
  )
}