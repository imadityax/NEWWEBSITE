export default function Blog() {
  const categories = [
    "Neuroplasticity", "Memory", "Focus", "Sleep Science",
    "Cognitive Load", "Brain Health", "Learning", "Mindfulness"
  ];

  return (
    <section className="py-16 px-8 md:px-16 bg-white w-full ml-32 mr-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 ">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">BLOG</h2>
        <button className="px-5 py-2 rounded-full border border-gray-400 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          Read Our Blog →
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-3">

        {/* Card 1: Large image — spans 2 rows */}
        <div className="row-span-2 relative rounded-2xl overflow-hidden min-h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
            alt="Brain Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-white rounded-full w-9 h-9 flex items-center justify-center text-base shadow">
            🧠
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white/70 text-xs mb-1">Category . Neuroscience | 22 Feb</p>
            <h3 className="text-white text-2xl font-black leading-tight uppercase">
              Best Full-Body Brain Training Methods!
            </h3>
          </div>
        </div>

        {/* Card 2: Green featured article */}
        <div className="bg-[#c8e6a0] rounded-2xl p-6 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <p className="text-xs font-semibold text-gray-600">Category . Neuroscience</p>
            <span className="text-gray-500 text-base leading-none">↗</span>
          </div>
          <h3 className="text-2xl font-black text-gray-900 uppercase leading-tight mb-3">
            Ready, Set, Think! How To Train Your Brain To Stay Sharp
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Neuroplasticity is recognized as a safe and effective way to improve cognitive performance.
            Something as simple as daily mental exercises can help someone...{" "}
            <span className="underline cursor-pointer font-medium">More</span>
          </p>
          <div className="border-t border-gray-400/50 pt-3 space-y-2 mt-auto">
            <div className="flex items-center justify-between text-xs font-bold text-gray-700 hover:opacity-60 cursor-pointer uppercase">
              <span>How To Improve Working Memory Like A Pro</span>
              <span>→</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-gray-700 hover:opacity-60 cursor-pointer uppercase">
              <span>How To Stay Focused In A Distraction-Filled Space</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Card 3: Blue card with image */}
        <div className="bg-[#a8cfe0] rounded-2xl p-5 relative overflow-hidden">
          <p className="text-xs font-semibold text-gray-600 mb-1">Category . Brain Health</p>
          <p className="text-xs text-gray-500 mb-3">Hot · 12 Feb</p>
          <h3 className="text-xl font-black text-gray-900 uppercase leading-tight w-3/5">
            Overcoming Mental Laziness In Learning
          </h3>
          <img
            src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=300"
            alt="Thinking"
            className="absolute bottom-0 right-0 h-32 w-28 object-cover rounded-tl-2xl"
          />
        </div>

        {/* Card 4: Video/image card */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600"
            alt="Cognitive Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-md">
              <span className="text-gray-900 text-sm pl-0.5">▶</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white/70 text-xs mb-1">5 Min · 22 Feb</p>
            <h3 className="text-white text-sm font-black uppercase leading-snug">
              Cognitive Training | Soft And Hard Methods Of Learning
            </h3>
          </div>
        </div>

        {/* Card 5: Categories */}
        <div className="bg-[#d4b8e8] rounded-2xl p-5 flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-75 transition-opacity
                  ${i === 1 || i === 4 ? "bg-[#f0e050] text-gray-800" : "bg-white/60 text-gray-700"}`}
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-bold text-gray-800">View All Categories</span>
            <button className="w-9 h-9 bg-[#f0e050] rounded-full flex items-center justify-center text-sm font-bold hover:opacity-80 transition-opacity">
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}