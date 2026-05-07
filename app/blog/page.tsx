'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { blogPosts, type BlogPost } from './blogData'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      post.category === selectedCategory

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">

      {selectedBlog ? (
        /* FULL BLOG VIEW */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-5 sm:px-6 py-12 sm:py-20"
        >

          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-6 sm:mb-8 px-5 sm:px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium text-sm sm:text-base"
          >
            ← Back to Blogs
          </button>

          <motion.article
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            {selectedBlog.image && (
              <motion.img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}

            <div className="p-5 sm:p-8 md:p-12">

              <div className="mb-8">

                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                  {selectedBlog.category}
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
                  {selectedBlog.title}
                </h1>

                <p className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                  {selectedBlog.desc}
                </p>

                <p className="text-sm text-gray-400">
                  {selectedBlog.date}
                </p>

              </div>

              <div className="prose prose-base sm:prose-lg max-w-none">

                {selectedBlog.content
                  .split('\n\n')
                  .map((paragraph: string, index: number) => {

                    if (
                      paragraph.trim().match(/^[A-Z][^.!?]*?$/m) &&
                      paragraph.length < 100
                    ) {
                      return (
                        <h2
                          key={index}
                          className="text-2xl sm:text-3xl font-bold mt-8 mb-5 text-gray-800"
                        >
                          {paragraph.trim()}
                        </h2>
                      )
                    }

                    return (
                      <p
                        key={index}
                        className="text-gray-700 leading-7 sm:leading-8 mb-5 sm:mb-6 text-base sm:text-lg"
                      >
                        {paragraph.trim()}
                      </p>
                    )
                  })}

              </div>

            </div>

          </motion.article>

        </motion.div>
      ) : (
        <>
          {/* HERO */}
          <motion.section
            className="relative overflow-hidden text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            {/* Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1600)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="max-w-7xl mx-auto text-center relative z-10">

              <motion.p
                className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[11px] sm:text-sm text-white/70 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Insights & Blog
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ideas That Shape Tomorrow.
              </motion.h1>

              <motion.p
                className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg text-white/80 leading-7 sm:leading-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Explore thoughts on technology, innovation,
                psychology, and building the future.
              </motion.p>

            </div>

          </motion.section>

          {/* SEARCH + FILTER */}
          <motion.section
            className="py-10 sm:py-16 px-5 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            <div className="max-w-7xl mx-auto">

              {/* Search */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >

                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-blue-200 focus:border-blue-600 focus:outline-none text-sm sm:text-lg transition"
                />

              </motion.div>

              {/* Filters */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >

                {[
                  'All',
                  'Psychology',
                  'Intellectual Growth',
                  'Innovation',
                  'Research',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedCategory(tag)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition ${
                      selectedCategory === tag
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}

              </motion.div>

            </div>

          </motion.section>

          {/* BLOG GRID */}
          <motion.section
            className="pb-16 sm:pb-24 px-5 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >

            <div className="max-w-7xl mx-auto">

              {filteredPosts.length > 0 ? (

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      onClick={() => setSelectedBlog(post)}
                      className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + index * 0.1,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >

                      <div className="h-52 sm:h-56 bg-gradient-to-br from-blue-500 to-indigo-700 overflow-hidden">

                        {post.image && (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        )}

                      </div>

                      <div className="p-5 sm:p-8">

                        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 font-semibold mb-4">
                          {post.category}
                        </p>

                        <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-4">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 leading-7 mb-6 text-sm sm:text-base">
                          {post.desc}
                        </p>

                        <div className="flex items-center justify-between">

                          <span className="text-gray-400 text-xs sm:text-sm">
                            {post.date}
                          </span>

                          <span className="text-blue-600 font-semibold text-sm sm:text-base">
                            Read More →
                          </span>

                        </div>

                      </div>

                    </motion.article>
                  ))}

                </div>
              ) : (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-4">
                    No blogs found
                  </h3>

                  <p className="text-gray-500 text-base sm:text-lg">
                    Try adjusting your search or filters.
                  </p>

                </motion.div>
              )}

            </div>

          </motion.section>

          <Footer />
        </>
      )}

    </main>
  )
}