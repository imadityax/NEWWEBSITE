export default function OurWorks() {
  const cards = [
    {
      title: 'Students',
      desc: 'Students are trained to think clearly, not just learn content.',
      cls: 'md:top-6 md:right-0 bg-yellow-300',
    },
    {
      title: 'Professionals',
      desc: 'Professionals are guided to make better decisions in real situations.',
      cls: 'md:right-12 md:top-44 bg-pink-300',
    },
    {
      title: 'Leadership',
      desc: 'Leadership is developed through ownership, not position or theory.',
      cls: 'md:right-14 md:top-[350px] bg-white',
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
    <section className="w-full bg-white rounded-3xl px-5 sm:px-8 md:px-16 py-14 md:py-16 overflow-hidden relative">

      {/* Background Blobs */}
      <div className="absolute w-32 sm:w-40 h-32 sm:h-40 bg-pink-200/40 rounded-full -top-10 -left-10" />

      <div className="absolute w-32 sm:w-40 h-32 sm:h-40 bg-purple-200/30 rounded-full top-10 -right-10" />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-10">
        Our Work
      </h2>

      <div className="relative max-w-6xl mx-auto mt-10 pb-12">

        {/* Main Device */}
        <div className="mx-auto w-full max-w-4xl min-h-[520px] md:h-[430px] bg-gray-200 rounded-[28px] shadow-2xl border-[10px] sm:border-[14px] border-gray-100 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600" />

          {/* Left Content */}
          <div className="relative left-0 top-0 md:absolute md:left-8 md:top-12 text-white max-w-xl z-10 p-6 md:p-0">

            <p className="uppercase text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] opacity-80">
              What We Build
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mt-4">
              HUMAN THINKING THAT
              <br />
              PERFORMS IN REAL LIFE
            </h3>

            <div className="mt-6 space-y-3 text-sm sm:text-base text-white/90 max-w-md">
              {works.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>

          </div>

          {/* Right Design Blocks */}
          <div className="hidden md:grid absolute right-8 bottom-8 grid-cols-2 gap-4 w-[34%] z-0">

            <div className="bg-white rounded-2xl h-28" />
            <div className="bg-teal-300 rounded-2xl h-28" />
            <div className="bg-white rounded-2xl h-28" />
            <div className="bg-cyan-300 rounded-2xl h-28" />

          </div>

        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-4 mt-6 md:hidden">

          {cards.map((card, i) => (
            <div
              key={i}
              className={`${card.cls} rounded-2xl shadow-xl p-5`}
            >
              <div className="text-lg font-bold text-black/90 mb-2">
                {card.title}
              </div>

              <p className="text-sm text-black/70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Desktop Floating Cards */}
        <div className="hidden md:block">

          {cards.map((card, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl shadow-xl p-5 w-72 h-auto z-20 ${card.cls}`}
            >
              <div className="text-lg font-bold text-black/90 mb-2">
                {card.title}
              </div>

              <p className="text-sm text-black/70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Shadow */}
        <div className="mx-auto w-full max-w-5xl h-6 sm:h-8 bg-gray-300 rounded-b-full mt-2 shadow-inner" />

      </div>

      {/* Footer Text */}
      <p className="text-center tracking-[0.25em] sm:tracking-[0.45em] md:tracking-[0.6em] text-sm sm:text-lg md:text-xl mt-10 md:mt-14">
        THINKING LAB
      </p>

    </section>
  )
}