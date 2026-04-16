const stats = [
  { value: '17+', label: 'Years' },
  { value: '200+', label: 'Clients' },
  { value: '27+', label: 'Products' },
  { value: '22+', label: 'Services' },
  { value: '11+', label: 'Industries' },
  { value: '200+', label: 'Employees' },
]

const clients = ['NeuroTech', 'CogniLearn', 'BrainWave', 'EduMind', 'FutureBrain', 'MindSet', 'NeuroCore']

export default function StatsAndClients() {
  return (
    <>
      {/* Work Together + Stats */}
      <section className="py-16 px-8 md:px-16 bg-white text-center">
        <p className="text-gray-500 text-sm mb-1">Join with us</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Work Together</h2>
        <p className="text-gray-600 text-sm mb-10 max-w-md mx-auto">
          Build a career advancing cognitive science and technology. We are here to unlock potential!
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-10 px-8 md:px-16 bg-gray-50 border-t border-gray-100">
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-6">Clients</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <span key={client} className="text-gray-600 font-semibold text-sm hover:text-[#2d0a4e] transition-colors cursor-pointer">
              {client}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
