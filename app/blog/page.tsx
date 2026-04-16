'use client'

export default function BlogPage() {
  const posts = [
    {
      category: 'Artificial Intelligence',
      title: 'How AI Is Reshaping Modern Business Operations',
      desc: 'Discover how automation, analytics and intelligent systems are changing the way companies operate.',
      date: 'April 2026',
    },
    {
      category: 'Innovation',
      title: 'Why Future-First Companies Win Faster',
      desc: 'The mindset, systems and culture behind organizations that dominate future markets.',
      date: 'April 2026',
    },
    {
      category: 'Software',
      title: 'Building Scalable Products With Clean Architecture',
      desc: 'A practical guide to creating systems that grow without losing performance.',
      date: 'March 2026',
    },
    {
      category: 'Neuro Tech',
      title: 'The Rise of Human + Machine Interfaces',
      desc: 'How neurotechnology may redefine learning, productivity and healthcare.',
      date: 'March 2026',
    },
    {
      category: 'Leadership',
      title: 'Innovation Leadership in High Growth Teams',
      desc: 'How great leaders create momentum inside modern tech companies.',
      date: 'February 2026',
    },
    {
      category: 'Strategy',
      title: 'Digital Transformation That Actually Works',
      desc: 'Why many transformation projects fail and what successful companies do differently.',
      date: 'February 2026',
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e3a8a] to-[#2563eb] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-5">Insights & Blog</p>
          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            Ideas That Shape Tomorrow.
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/80 leading-8">
            Explore thoughts on technology, innovation, AI, leadership and building the future.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {['All','AI','Innovation','Software','Leadership','Strategy'].map((tag) => (
            <button key={tag} className="px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition font-medium">
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-indigo-700"></div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-4">{post.category}</p>
                <h2 className="text-2xl font-bold leading-tight mb-4">{post.title}</h2>
                <p className="text-gray-600 leading-8 mb-6">{post.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <button className="text-blue-600 font-semibold">Read More →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-14">
          <h3 className="text-4xl md:text-5xl font-bold">Stay Updated</h3>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-8">
            Get the latest insights, product launches and innovation stories from Aaruchudar.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="px-6 py-4 rounded-full text-black min-w-[280px] outline-none" />
            <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}