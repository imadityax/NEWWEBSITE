const serviceCards = [
  { title: 'VR Modules', desc: 'Improving planning and problem-solving abilities', bg: 'bg-yellow-200' },
  { title: 'Personalized Plans', desc: 'Tailored programs for individual growth', bg: 'bg-teal-200' },
  { title: 'Research Partnerships', desc: 'Collaborating with leading institutions', bg: 'bg-blue-100' },
  { title: 'Data Analytics', desc: 'Utilizing data for optimised outcomes', bg: 'bg-pink-200' },
  { title: 'Neurofeedback', desc: 'Real-time training for self-regulation', bg: 'bg-purple-100' },
  { title: 'Educational Programs', desc: 'Empowering students with future skills', bg: 'bg-green-100' },
]

export default function CenterServices() {
  return (
    <section className="py-16 px-8 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Aaruchudar, Center Our Services</h2>

      {/* Featured card */}
      <div className="relative rounded-xl overflow-hidden mb-6 h-48 bg-gray-900">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[#1a0a2e]/60 flex flex-col justify-end p-5">
          <h3 className="text-white font-bold text-lg mb-1">The Science of Neuroplasticity</h3>
          <p className="text-white/80 text-xs mb-3">
            Exploring how the brain changes and adapts through learning and experience...
          </p>
          <button className="w-fit text-xs text-white border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-[#1a0a2e] transition-colors">
            Read more →
          </button>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
          <svg className="w-4 h-4 text-[#2d0a4e] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {serviceCards.map((card) => (
          <div key={card.title} className={`${card.bg} rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow`}>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">{card.title}</h4>
            <p className="text-gray-600 text-xs leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
