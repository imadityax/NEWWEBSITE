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
    <section className="pt-0 pb-12 px-8 md:px-16 bg-white text-center w-full overflow-hidden">
  <p className="text-gray-500 text-sm mb-1">Grow with us</p>

  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
    Build Better Thinking
  </h2>

  <p className="text-gray-600 text-sm mb-14 max-w-xl mx-auto">
    Join Aaruchudar in shaping clarity, decision-making, focus, and human performance through neuroscience-based learning experiences.
  </p>

  {/* Floating Stats */}
  <div className="relative w-full overflow-hidden pb-32">
    <div className="flex gap-16 md:gap-60 items-center whitespace-nowrap animate-marquee">
      {[...stats, ...stats].map((stat, index) => (
        <div key={index} className="min-w-fit">
          <p className="text-4xl md:text-5xl font-bold text-gray-900">
            {stat.value}
          </p>

          <p className="text-gray-500 text-sm mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}