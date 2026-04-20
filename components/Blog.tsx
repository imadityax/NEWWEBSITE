import Link from 'next/link'
import { blogPosts } from '@/app/blog/blogData'

export default function Blog() {
  const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <section className="py-16 px-8 md:px-16 bg-white w-full ml-32 mr-32">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 ">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">BLOG</h2>
        <Link
          href="/blog"
          className="px-5 py-2 rounded-full border border-gray-400 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Read Our Blog →
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-3">

        {/* Card 1: Large image — spans 2 rows */}
        {blogPosts[0] && (
          <div className="row-span-2 relative rounded-2xl overflow-hidden min-h-[480px]">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-white rounded-full w-9 h-9 flex items-center justify-center text-base shadow">
              🧠
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/70 text-xs mb-1">Category . {blogPosts[0].category} | {blogPosts[0].date}</p>
              <h3 className="text-white text-2xl font-black leading-tight uppercase">
                {blogPosts[0].title}
              </h3>
            </div>
          </div>
        )}

        {/* Card 2: Green featured article */}
        {blogPosts[1] && (
          <div className="bg-[#c8e6a0] rounded-2xl p-6 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-semibold text-gray-600">Category . {blogPosts[1].category}</p>
              <span className="text-gray-500 text-base leading-none">↗</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 uppercase leading-tight mb-3">
              {blogPosts[1].title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {blogPosts[1].desc}{" "}
              <span className="underline cursor-pointer font-medium">More</span>
            </p>
            <div className="border-t border-gray-400/50 pt-3 space-y-2 mt-auto">
              <div className="flex items-center justify-between text-xs font-bold text-gray-700 hover:opacity-60 cursor-pointer uppercase">
                <span>{blogPosts[2]?.title.substring(0, 40)}</span>
                <span>→</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-gray-700 hover:opacity-60 cursor-pointer uppercase">
                <span>{blogPosts[3]?.title.substring(0, 40)}</span>
                <span>→</span>
              </div>
            </div>
          </div>
        )}

        {/* Card 3: Blue card with image */}
        {blogPosts[2] && (
          <div className="bg-[#a8cfe0] rounded-2xl p-5 relative overflow-hidden">
            <p className="text-xs font-semibold text-gray-600 mb-1">Category . {blogPosts[2].category}</p>
            <p className="text-xs text-gray-500 mb-3">Hot · {blogPosts[2].date}</p>
            <h3 className="text-xl font-black text-gray-900 uppercase leading-tight w-3/5">
              {blogPosts[2].title}
            </h3>
            <img
              src={blogPosts[2].image}
              alt={blogPosts[2].title}
              className="absolute bottom-0 right-0 h-32 w-28 object-cover rounded-tl-2xl"
            />
          </div>
        )}

        {/* Card 4: Video/image card */}
        {blogPosts[3] && (
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={blogPosts[3].image}
              alt={blogPosts[3].title}
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
              <p className="text-white/70 text-xs mb-1">3 min read · {blogPosts[3].date}</p>
              <h3 className="text-white text-sm font-black uppercase leading-snug">
                {blogPosts[3].title}
              </h3>
            </div>
          </div>
        )}

        {/* Card 5: Categories */}
        <div className="bg-[#d4b8e8] rounded-2xl p-5 flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-4">
            {uniqueCategories.map((cat, i) => (
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