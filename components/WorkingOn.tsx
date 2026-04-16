const projects = [
  {
    title: 'Building the Future of Neuro-Education',
    desc: 'Integrating AI and neuroscience for personalized learning',
    img: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400',
  },
  {
    title: 'Empowering Educators with Advanced Tools',
    desc: 'Training programs for modern teaching',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
  },
  {
    title: 'Pioneering Cognitive Health Solutions',
    desc: 'Researching new methods for mental wellness',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
  },
]

export default function WorkingOn() {
  return (
    <section className="py-16 px-8 md:px-16 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">What we are Working on Today</h2>
        <button className="text-sm text-[#2d0a4e] border border-[#2d0a4e] px-4 py-1.5 rounded-full hover:bg-[#2d0a4e] hover:text-white transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="relative rounded-xl overflow-hidden h-64 cursor-pointer group">
            <div
              className="absolute inset-0 group-hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url('${project.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-sm mb-1">{project.title}</h3>
              <p className="text-white/70 text-xs">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
