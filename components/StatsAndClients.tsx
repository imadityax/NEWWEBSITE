const stats = [
  { value: '8', label: 'Core Labs' },
  { value: '7', label: 'Courses' },
  { value: '3', label: 'Workshops' },
  { value: '5', label: 'Training Areas' },
  { value: '250+', label: 'Activities' },
  { value: '2+', label: 'Audience Types' },
]

export default function StatsAndClients() {
  return (
    <section className="pt-0 pb-14 sm:pb-16 px-5 sm:px-8 md:px-16 bg-white text-center w-full overflow-hidden">

      <p className="text-gray-500 text-xs sm:text-sm mb-2">
        Grow with us
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
        Build Better Thinking
      </h2>

      <p className="text-gray-600 text-sm sm:text-base mb-10 sm:mb-14 max-w-xl mx-auto leading-relaxed">
        Join Aaruchudar in shaping clarity, decision-making,
        focus, and human performance through neuroscience-based
        learning experiences.
      </p>

      {/* Floating Stats */}
      <div className="relative w-full overflow-hidden pb-16 sm:pb-24">

        <div className="flex gap-10 sm:gap-16 md:gap-40 items-center whitespace-nowrap animate-marquee">

          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="min-w-fit">

              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {stat.value}
              </p>

              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}