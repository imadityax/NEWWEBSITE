'use client'

import { useRef } from 'react'

const serviceCards = [
  {
    title: 'VR Modules',
    desc: 'Improving planning and problem-solving abilities through immersive environments.',
    bg: 'bg-[#c8e6a0]',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300',
  },
  {
    title: 'Personalized Plans',
    desc: 'Tailored programs designed for individual cognitive growth and performance.',
    bg: 'bg-[#a8cfe0]',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300',
  },
  {
    title: 'Research Partnerships',
    desc: 'Collaborating with leading neuroscience institutions worldwide.',
    bg: 'bg-[#f0e8b4]',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300',
  },
  {
    title: 'Data Analytics',
    desc: 'Utilizing real-time brain data for optimised cognitive outcomes.',
    bg: 'bg-[#d4b8e8]',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300',
  },
  {
    title: 'Neurofeedback',
    desc: 'Real-time brainwave training for focus and self-regulation.',
    bg: 'bg-[#f7c3cb]',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300',
  },
  {
    title: 'Educational Programs',
    desc: 'Empowering students with future-ready cognitive skills.',
    bg: 'bg-[#b8e8d4]',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300',
  },
]

export default function CenterServices() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -420 : 420,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-16 px-8 md:px-16 bg-white w-full overflow-hidden">

      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight max-w-2xl">
          Our carefully designed programs are the{' '}
          <em className="font-serif italic font-normal text-gray-700">
            essence of our cognitive
          </em>{' '}
          training devotion
        </h2>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
          >
            →
          </button>
        </div>
        <button className="text-xs font-semibold text-gray-700 underline underline-offset-4 tracking-widest uppercase hover:opacity-60 transition-opacity">
          View All
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden scroll-smooth"
      >
        {serviceCards.map((card) => (
          <div
            key={card.title}
            className={`${card.bg} rounded-2xl p-6 flex flex-col justify-between min-w-[420px] shrink-0 cursor-pointer hover:scale-[1.01] transition-transform`}
            style={{ minHeight: '300px' }}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {card.title}
              </h3>
              <button className="w-10 h-10 shrink-0 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm hover:bg-gray-700 transition-colors">
                →
              </button>
            </div>

            <div className="flex items-end justify-between gap-4 mt-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-32 h-32 object-cover rounded-xl"
              />
              <p className="text-sm text-gray-700 leading-relaxed text-right max-w-[180px]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}