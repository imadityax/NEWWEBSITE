'use client'

const works = [
  {
    title: 'Clear Thinking',
    desc: 'Students are trained to think clearly, not just learn content.',
    bg: 'bg-[#EEEEEE]',
    emoji: '🔍',
  },
  {
  title: 'Better Decisions',
  desc: 'Professionals are guided to make better decisions in real situations.',
  bg: 'bg-[#FCF9EA]',
  emoji: '👔',
},
  {
    title: 'Clarity & Focus',
    desc: 'Clarity and focus are strengthened to handle complexity without confusion.',
    bg: 'bg-[#F2EAE0]',
    emoji: '💼',
  },
  {
    title: 'Ownership Leadership',
    desc: 'Leadership is developed through ownership, not position or theory.',
    bg: 'bg-[#f6a8c8]',
    emoji: '🧠',
    large: true,
  },
  {
    title: 'Team Performance',
    desc: 'Teams are shaped to communicate, collaborate, and perform effectively',
    bg: 'bg-[#f7e08c]',
    emoji: '🎓',
  },
  {
    title: 'Conflict Recovery',
    desc: 'Conflicts are approached with understanding and recovery, not reaction.',
    bg: 'bg-[#FFF2C6]',
    emoji: '🤝',
  },
  {
    title: 'Experimental Thinking',
    desc: 'Thinking is trained through real, activity-based experiences.',
    bg: 'bg-[#A7AAE1]',
    emoji: '⚗️',
  },
  {
    title: 'Human Intelligence',
    desc: 'Human intelligence is built to perform better in everyday life and work.',
    bg: 'bg-[#cfe8ff]',
    emoji: '💡',
  },
]

export default function OurWorks() {
  return (
    <section className="pt-10 pb-4 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C9A227] font-bold mb-3">
            Our Works
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-black">
            What We Build
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4 auto-rows-[320px]">
          {works.map((work, index) => (
            <div
              key={index}
              className={`${work.bg} rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition duration-500 flex flex-col ${
                work.large ? 'md:col-span-2' : ''
              }`}
            >
              {/* Icon area — top 60% */}
              <div className="flex-1 flex items-center justify-center">
                <span
                  className="select-none group-hover:scale-110 transition duration-500 drop-shadow-lg"
                  style={{ fontSize: work.large ? '9rem' : '6rem', lineHeight: 1 }}
                >
                  {work.emoji}
                </span>
              </div>

              {/* Text area — bottom */}
              <div className="px-8 pb-8">
                <h3 className="text-xl font-black text-black mb-2 leading-snug">
                  {work.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
                  {work.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}