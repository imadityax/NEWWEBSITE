export default function OurWorks() {
  const cards = [
    {
      title: 'Students',
      desc: 'Students are trained to think clearly, not just learn content.',
      cls: 'top-6 right-0 bg-yellow-300 w-72 h-32 z-20',
    },
    {
      title: 'Professionals',
      desc: 'Professionals are guided to make better decisions in real situations.',
      cls: 'right-12 top-44 bg-pink-300 w-72 h-36 z-20',
    },
    {
      title: 'Leadership',
      desc: 'Leadership is developed through ownership, not position or theory.',
      cls: 'right-14 top-[350px] bg-white w-72 h-36 z-20',
    },
  ]

  const works = [
    'Clarity and focus are strengthened to handle complexity without confusion.',
    'Teams are shaped to communicate, collaborate, and perform effectively.',
    'Conflicts are approached with understanding and recovery, not reaction.',
    'Thinking is trained through real, activity-based experiences.',
    'Human intelligence is built to perform better in everyday life and work.',
  ]

  return (
    <section className="w-full min-h-screen bg-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
      <div className="absolute w-40 h-40 bg-pink-200/40 rounded-full -top-10 -left-10" />
      <div className="absolute w-40 h-40 bg-purple-200/30 rounded-full top-10 -right-10" />

      <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-10">
        Our Work
      </h2>

      <div className="relative max-w-6xl mx-auto mt-10 pb-12">
        <div className="mx-auto w-full max-w-4xl h-[430px] bg-gray-200 rounded-[28px] shadow-2xl border-[14px] border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600" />

          <div className="absolute left-8 top-12 text-white max-w-md z-10">
            <p className="uppercase text-xs tracking-[0.4em] opacity-80">
              What We Build
            </p>

            <h3 className="text-4xl font-black leading-tight mt-4">
              HUMAN THINKING THAT
              <br />
              PERFORMS IN REAL LIFE
            </h3>

            <div className="mt-6 space-y-3 text-sm md:text-base text-white/90 max-w-md">
              {works.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

          {/* right design blocks */}
          <div className="absolute right-8 bottom-8 grid grid-cols-2 gap-4 w-[34%] z-0">
            <div className="bg-white rounded-2xl h-28" />
            <div className="bg-teal-300 rounded-2xl h-28" />
            <div className="bg-white rounded-2xl h-28" />
            <div className="bg-cyan-300 rounded-2xl h-28" />
          </div>
        </div>

        {/* floating cards */}
        {cards.map((card, i) => (
          <div
            key={i}
            className={`absolute rounded-2xl shadow-xl p-5 ${card.cls}`}
          >
            <div className="text-lg font-bold text-black/90 mb-2">
              {card.title}
            </div>

            <p className="text-sm text-black/70 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}

        <div className="mx-auto w-full max-w-5xl h-8 bg-gray-300 rounded-b-full mt-2 shadow-inner" />
      </div>

      <p className="text-center tracking-[0.6em] text-xl mt-14">
        THINKING LAB
      </p>
    </section>
  )
}