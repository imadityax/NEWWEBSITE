'use client'

import { useRef } from 'react'

const serviceCards = [
  {
    title: 'Clarity as Culture',
    desc: 'Builds clarity as a consistent way of thinking, helping individuals reduce confusion and approach situations with structured understanding.',
    bg: 'bg-[#c8e6a0]',
    img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=300',
  },
  {
    title: 'Decision Making Without Drama',
    desc: 'Enables calm and practical decision-making by reducing overthinking and emotional noise.',
    bg: 'bg-[#a8cfe0]',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300',
  },
  {
    title: 'Inner Focus in a Noisy World',
    desc: 'Strengthens the ability to stay mentally focused and fully engaged despite constant distractions.',
    bg: 'bg-[#f0e8b4]',
    img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300',
  },
  {
    title: 'The Power of Listening',
    desc: 'Develops the ability to truly understand others, improving connection and communication.',
    bg: 'bg-[#d4b8e8]',
    img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=300',
  },
  {
    title: 'Intelligent Conflict and Recovery',
    desc: 'Equips individuals to handle conflicts with awareness and recover effectively without lasting impact.',
    bg: 'bg-[#f7c3cb]',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300',
  },
  {
    title: 'Systematic Thinking',
    desc: 'Encourages structured, step-by-step thinking to improve clarity and problem-solving.',
    bg: 'bg-[#b8e8d4]',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300',
  },
  {
    title: 'Voice, Value and Vulnerability',
    desc: 'Builds confident and authentic self-expression through deeper self-awareness.',
    bg: 'bg-[#ffd9a8]',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300',
  },
  {
    title: 'Leadership Without Imitation',
    desc: 'Develops original leadership by encouraging independent thinking and ownership.',
    bg: 'bg-[#d6d6ff]',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300',
  },
]

export default function CenterServices() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -360 : 360,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-14 sm:py-16 px-5 sm:px-8 md:px-16 bg-white w-full overflow-hidden">

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight max-w-3xl">

          Our 8 Core Labs are the{' '}

          <em className="font-serif italic font-normal text-gray-700">
            foundation of our cognitive
          </em>{' '}

          training commitment

        </h2>

      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">

        <div className="flex items-center gap-3">

          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
          >
            ←
          </button>

          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
          >
            →
          </button>

        </div>

      </div>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
      >
        {serviceCards.map((card) => (
          <div
            key={card.title}
            className={`${card.bg} rounded-2xl p-5 sm:p-6 flex flex-col justify-between shrink-0 cursor-pointer md:hover:scale-[1.01] transition-transform 
      min-w-[280px] sm:min-w-[340px] md:min-w-[420px]`}
            style={{ minHeight: '280px' }}
          >

            {/* Top */}
            <div className="flex items-start justify-between gap-2">

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug max-w-[220px] sm:max-w-[250px]">
                {card.title}
              </h3>

            </div>

            {/* Bottom */}
            <div className="flex items-end justify-between gap-4 mt-6">

              <img
                src={card.img}
                alt={card.title}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl shrink-0"
              />

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-right max-w-[160px] sm:max-w-[190px]">
                {card.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}