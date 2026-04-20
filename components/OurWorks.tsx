'use client'

import {
  Search,
  Bot,
  BriefcaseBusiness,
  Brain,
  GraduationCap,
  BarChart3,
} from 'lucide-react'

const works = [
  {
    title: 'Decision Architecture',
    desc: 'Build stronger thinking systems and practical judgment frameworks.',
    bg: 'bg-[#f4d7f7]',
    icon: Search,
  },
  {
    title: 'AI Intelligence Labs',
    desc: 'Automation systems for complex patterns and future decisions.',
    bg: 'bg-[#d8f5d7]',
    icon: Bot,
  },
  {
    title: 'Leadership Systems',
    desc: 'Enhancing execution, clarity, and conscious action systems.',
    bg: 'bg-[#ece7e3]',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Cognitive Training',
    desc: 'Interactive learning systems designed for modern minds.',
    bg: 'bg-[#f6a8c8]',
    icon: Brain,
    large: true,
  },
  {
    title: 'Education Platforms',
    desc: 'Structured learning resources and intelligence tools.',
    bg: 'bg-[#f7e08c]',
    icon: GraduationCap,
  },
  {
    title: 'Performance Analytics',
    desc: 'Measure growth, outcomes, and decision efficiency.',
    bg: 'bg-[#cfe8ff]',
    icon: BarChart3,
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
          {works.map((work, index) => {
            const Icon = work.icon

            return (
              <div
                key={index}
                className={`${work.bg} rounded-[2rem] p-8 relative overflow-hidden group hover:-translate-y-2 transition duration-500 ${
                  work.large ? 'md:col-span-2' : ''
                }`}
              >
                {/* Better Icon */}
                <div className="mb-8 group-hover:scale-110 transition duration-500">
                  <Icon
                    size={90}
                    strokeWidth={1.5}
                    className="text-black/80"
                  />
                </div>

                {/* Text */}
                <h3 className="text-2xl font-black text-black mb-4">
                  {work.title}
                </h3>

                <p className="text-gray-800 leading-relaxed max-w-sm">
                  {work.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}