'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { blogPosts, type BlogPost } from './blogData'

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const posts = blogPosts

  // Filter posts based on category and search query
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      {selectedBlog ? (
        // Full Blog View - Animated entrance
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6 py-20"
        >
          <button 
            onClick={() => setSelectedBlog(null)}
            className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium"
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
                className="w-full h-96 object-cover" 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            )}
            <div className="p-12">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                  {selectedBlog.category}
                </span>
                <h1 className="text-5xl font-bold mb-6 leading-tight">{selectedBlog.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{selectedBlog.desc}</p>
                <p className="text-sm text-gray-400">{selectedBlog.date}</p>
              </div>
            
            <div className="prose prose-lg max-w-none">
              {selectedBlog.content.split('\n\n').map((paragraph: string, index: number) => {
                // Check if it's a heading (starts with title or contains keywords)
                if (paragraph.trim().match(/^[A-Z][^.!?]*?$/m) && paragraph.length < 100) {
                  return <h2 key={index} className="text-3xl font-bold mt-8 mb-6 text-gray-800">{paragraph.trim()}</h2>
                }
                return <p key={index} className="text-gray-700 leading-8 mb-6">{paragraph.trim()}</p>
              })}
            </div>
            </div>
          </motion.article>
        </motion.div>
      ) : (
        // Blog List View
        <>
          <motion.section 
            className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e3a8a] to-[#2563eb] text-white py-28 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto text-center">
              <motion.p 
                className="uppercase tracking-[0.35em] text-sm text-white/70 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Insights & Blog
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ideas That Shape Tomorrow.
              </motion.h1>
              <motion.p 
                className="mt-8 max-w-3xl mx-auto text-lg text-white/80 leading-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Explore thoughts on technology, innovation, psychology, and building the future.
              </motion.p>
            </div>
          </motion.section>

          <motion.section 
            className="py-16 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Search Bar */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <input
                  type="text"
                  placeholder="Search blogs by title, category, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-600 focus:outline-none text-lg transition"
                />
              </motion.div>

              {/* Category Filter */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {['All', 'Psychology', 'Intellectual Growth', 'Innovation', 'Research'].map((tag, index) => (
                  <motion.button
                    key={tag}
                    onClick={() => setSelectedCategory(tag)}
                    className={`px-6 py-3 rounded-full font-medium transition ${
                      selectedCategory === tag
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                  >
                    {tag}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section 
            className="pb-24 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="max-w-7xl mx-auto">
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article 
                      key={post.id}
                      onClick={() => setSelectedBlog(post)}
                      className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className="h-56 bg-gradient-to-br from-blue-500 to-indigo-700 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.image && <img src={post.image} alt={post.title} className="w-full h-full object-cover" />}
                      </motion.div>
                      <div className="p-8">
                        <motion.p 
                          className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 + 0.2 }}
                        >
                          {post.category}
                        </motion.p>
                        <motion.h2 
                          className="text-2xl font-bold leading-tight mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 + 0.25 }}
                        >
                          {post.title}
                        </motion.h2>
                        <motion.p 
                          className="text-gray-600 leading-8 mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 + 0.3 }}
                        >
                          {post.desc}
                        </motion.p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">{post.date}</span>
                          <motion.button 
                            className="text-blue-600 font-semibold hover:text-blue-700"
                            whileHover={{ x: 5 }}
                          >
                            Read More →
                          </motion.button>
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
                  <h3 className="text-3xl font-bold text-gray-600 mb-4">No blogs found</h3>
                  <p className="text-gray-500 text-lg">Try adjusting your search or filters to find what you're looking for.</p>
                </motion.div>
              )}
            </div>
          </motion.section>

          <motion.section 
            className="py-24 px-6 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="max-w-5xl mx-auto text-center rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-14"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Stay Updated
              </motion.h3>
              <motion.p 
                className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Get the latest insights, product launches and innovation stories from Aaruchudar.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-4 rounded-full text-black min-w-[280px] outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button 
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.section>
        </>
      )}
    </main>
  )
}