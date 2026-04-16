const servicesList = [
  'Neurofeedback Training',
  'Cognitive Enhancement',
  'VR Learning Modules',
  'Brain Mapping Analysis',
  'Executive Functioning Skills',
  'Personalized Learning Plans',
]

export default function Services() {
  return (
    <section id="home" className="py-16 px-8 md:px-16 bg-white border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <ul className="space-y-3">
            {servicesList.map((service) => (
              <li
                key={service}
                className="py-3 px-4 border-b border-gray-200 text-gray-700 text-sm hover:text-[#2d0a4e] cursor-pointer transition-colors"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 relative rounded-xl overflow-hidden min-h-[250px] bg-gray-900">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-[#2d0a4e] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
