const stats = [
  { value: '17+', label: 'Years' },
  { value: '200+', label: 'Clients' },
  { value: '27+', label: 'Products' },
  { value: '22+', label: 'Services' },
  { value: '5+', label: 'Industries' },
  { value: '20+', label: 'Employees' },
]

export default function StatsAndClients() {
  return (
    <section className="pt-0 pb-12 px-8 md:px-16 bg-white text-center w-full overflow-hidden">
      <p className="text-gray-500 text-sm mb-1">Join with us</p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Work Together
      </h2>

      <p className="text-gray-600 text-sm mb-14 max-w-md mx-auto ">
        Build a career advancing cognitive science and technology. We are here to unlock potential!
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