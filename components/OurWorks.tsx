const works = [
  {
    icon: '🧠',
    title: 'Cognitive Training',
    desc: 'Enhancing memory and focus through advanced modules',
    bg: 'bg-pink-100',
    iconBg: 'bg-pink-200',
  },
  {
    icon: '🥽',
    title: 'VR Modules',
    desc: 'Immersive learning experiences for skill acquisition',
    bg: 'bg-green-100',
    iconBg: 'bg-green-200',
  },
  {
    icon: '🎧',
    title: 'Brain Mapping',
    desc: 'Comprehensive analysis of neural activity',
    bg: 'bg-blue-100',
    iconBg: 'bg-blue-200',
  },
  {
    icon: '📊',
    title: 'Executive Skills',
    desc: 'Improving planning and problem-solving abilities',
    bg: 'bg-yellow-100',
    iconBg: 'bg-yellow-200',
  },
  {
    icon: '📋',
    title: 'Personalized Plans',
    desc: 'Tailored programs for individual growth',
    bg: 'bg-purple-100',
    iconBg: 'bg-purple-200',
  },
  {
    icon: '🤝',
    title: 'Research Partnerships',
    desc: 'Collaborating with leading institutions',
    bg: 'bg-teal-100',
    iconBg: 'bg-teal-200',
  },
  {
    icon: '📈',
    title: 'Data Analytics',
    desc: 'Utilizing data for optimized outcomes',
    bg: 'bg-sky-100',
    iconBg: 'bg-sky-200',
  },
  {
    icon: '🧬',
    title: 'Neurofeedback',
    desc: 'Real-time training for self-regulation',
    bg: 'bg-cyan-100',
    iconBg: 'bg-cyan-200',
  },
  {
    icon: '🎓',
    title: 'Educational Programs',
    desc: 'Empowering students with future skills',
    bg: 'bg-indigo-100',
    iconBg: 'bg-indigo-200',
  },
]

export default function OurWorks() {
  return (
    <section className="py-16 px-8 md:px-16 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Our Works</h2>
        <button className="text-sm text-[#2d0a4e] border border-[#2d0a4e] px-4 py-1.5 rounded-full hover:bg-[#2d0a4e] hover:text-white transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {works.map((work) => (
          <div key={work.title} className={`${work.bg} rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow`}>
            <div className={`${work.iconBg} w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3`}>
              {work.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">{work.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{work.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
