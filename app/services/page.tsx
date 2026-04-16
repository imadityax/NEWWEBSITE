'use client'

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
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 text-white/70">Aaruchudar Services</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            Building the Future Through Technology.
          </h1>
          <p className="mt-8 text-lg text-white/80 max-w-3xl mx-auto leading-8">
            We combine innovation, intelligence and engineering excellence to create products and systems that transform industries.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                0{index + 1}
              </div>
              <h2 className="text-3xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-8">{item.desc}</p>
              <div className="mt-8 text-sm font-semibold text-blue-600">Learn More →</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-12 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4">Why Choose Us</p>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Innovation with Real Results.
            </h3>
          </div>
          <div className="space-y-4 text-white/90 text-lg leading-8">
            <p>• Enterprise-grade engineering standards</p>
            <p>• Human-centered product design</p>
            <p>• AI-first future-ready systems</p>
            <p>• Trusted execution and long-term support</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-[#f5f5f5]">
        <h3 className="text-4xl md:text-5xl font-bold">Let’s Build Something Great</h3>
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Partner with Aaruchudar to create intelligent solutions for tomorrow.
        </p>
        <button className="mt-8 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Start Project
        </button>
      </section>
    </main>
  )
}