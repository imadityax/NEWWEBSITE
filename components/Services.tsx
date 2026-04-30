'use client'

import { useEffect, useRef, useState } from 'react'

const servicesList = [
  {
    title: 'Human Intelligence Labs',
    desc: 'Experiential learning spaces designed to build creativity, critical thinking, and leadership through real-world application.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800', // people in lab/group activity
  },
  {
    title: 'Human Intelligence Courses',
    desc: 'Structured programs that combine practical experience with deeper understanding for meaningful growth.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800', // person studying/taking notes
  },
  {
    title: 'Human Intelligence Workshop',
    desc: 'Hands-on, activity-based sessions that develop creativity, teamwork, and execution skills.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800', // team workshop session
  },
  {
    title: 'Brain Gym',
    desc: 'Cognitive training that keeps the brain active and sharp through structured exercises designed to improve thinking, focus, and overall mental performance.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800', // neural/brain network (same as hero — consistent)
  },
]

export default function Services() {
  const [visible, setVisible] = useState<boolean[]>(servicesList.map(() => false))
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    blockRefs.current.forEach((el, i) => {
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16">

        <div className="flex gap-20">

          {/* Left Sticky Label */}
          <div className="hidden md:flex flex-col items-start w-44 flex-shrink-0">
            <div className="sticky top-32 pt-20">
              <p className="text-s uppercase tracking-[0.35em] text-gray-800 font-semibold">
                Our Services
              </p>

              <div className="mt-4 w-10 h-[2px] bg-blue-600 rounded" />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col divide-y divide-gray-100">
            {servicesList.map((service, index) => {
              const isReverse = index % 2 !== 0

              return (
                <div
                  key={index}
                  ref={(el) => {
                    blockRefs.current[index] = el
                  }}
                  style={{
                    opacity: visible[index] ? 1 : 0,
                    transform: visible[index]
                      ? 'translateY(0)'
                      : 'translateY(30px)',
                    transition: 'all 0.7s ease',
                    transitionDelay: `${index * 120}ms`,
                  }}
                  className={`flex flex-col md:flex-row items-center gap-14 py-16 ${
                    isReverse ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-gray-100 hover:scale-105 transition duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}