import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-[#1a0a2e] via-[#2d0a4e] to-[#4a0e6b] overflow-hidden">
      <Navbar />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      <div className="relative z-10 flex flex-col justify-center min-h-[500px] px-8 md:px-16 pt-24 pb-16 max-w-lg">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
          Highly Interactive Cognitive Learning Systems
        </h1>
        <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#1a0a2e] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
