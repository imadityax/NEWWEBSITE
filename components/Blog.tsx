export default function Blog() {
  return (
    <section className="py-16 px-8 md:px-16 bg-[#f5e642]">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Featured post */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden mb-4 h-48 bg-gray-200">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <p className="text-xs font-semibold text-gray-700 mb-1">Featured post</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">The Science of Neuroplasticity</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Exploring how the brain changes and adapts through learning and experience… and easy experience...
          </p>
          <button className="text-sm font-medium text-gray-900 underline hover:opacity-70 transition-opacity">
            Read more →
          </button>
        </div>

        {/* Blog card list */}
        <div className="md:w-1/2 space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-4 bg-white/50 rounded-xl p-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">The Science of Neuroplasticity</h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Exploring how the brain changes and adapts through learning and experience...
                </p>
                <button className="text-xs font-medium text-gray-900 underline">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
