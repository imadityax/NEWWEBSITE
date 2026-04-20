'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const bubbles = Array.from({ length: 24 }, (_, i) => i)

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', form)
    
    setForm({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    alert('Thank you for reaching out! We will get back to you soon.')
  }

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:contact@aaruchudar.com',
      color: 'hover:bg-red-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/aaruchudar',
      color: 'hover:bg-blue-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/aaruchudar',
      color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ]

  return (
    <main className="min-h-screen text-black overflow-hidden">
      {/* Hero Section with Enhanced Design */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#eff6ff]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold tracking-wide">
              ✨ Get in Touch
            </div>
          </div>
          <h1 className="text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            Aaruchudar
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-6 text-white">
            Let's Build Something <span className="text-yellow-300">Great</span> Together.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
            Reach out to discuss projects, partnerships, careers or innovative ideas. 
            We'd love to hear from you and explore how we can collaborate.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="w-12 h-1 bg-white/40 rounded-full"></div>
            <div className="w-6 h-1 bg-white/60 rounded-full"></div>
            <div className="w-3 h-1 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section with Off-White Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] py-24 px-6">
        {/* Floating Bubbles with Animation */}
        {bubbles.map((i) => {
          const size = [16, 24, 32, 40, 56, 72][i % 6]
          const left = (i * 13) % 100
          const top = (i * 17) % 100
          const delay = i * 0.5
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#2563eb]/5 to-[#1e3a8a]/10 animate-float"
              style={{ 
                width: size, 
                height: size, 
                left: `${left}%`, 
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${8 + (i % 5)}s`
              }}
            />
          )
        })}
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 relative z-10">
          {/* Form Section with Hover Effects */}
          <div className="group">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#2563eb]/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
              </div>
              <p className="text-gray-500 text-sm mb-6 ml-13">We'll respond within 24 hours</p>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      value={form.name.split(' ')[0] || ''}
                      onChange={(e) => setForm({ ...form, name: e.target.value + (form.name.split(' ')[1] ? ' ' + form.name.split(' ')[1] : '') })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all text-black bg-white" 
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      value={form.name.split(' ')[1] || ''}
                      onChange={(e) => setForm({ ...form, name: (form.name.split(' ')[0] || '') + (e.target.value ? ' ' + e.target.value : '') })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all text-black bg-white" 
                    />
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all text-black bg-white" 
                  />
                </div>
                
                <div className="relative">
                  <textarea 
                    rows={5} 
                    placeholder="Your Message" 
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all resize-none text-black bg-white" 
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white font-semibold hover:from-[#1d4ed8] hover:to-[#172554] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Section with Cards */}
          <div className="space-y-6">
            {/* Head Office Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2563eb]/20 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/10 to-[#1e3a8a]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Head Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aaruchudar Pvt. Ltd.<br />
                    Cheyyar, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2563eb]/20 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/10 to-[#1e3a8a]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Info</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">📧 contact@aaruchudar.com</p>
                    <p className="flex items-center gap-2">📞 +91 XXX XXX XXXX</p>
                    <p className="flex items-center gap-2">🌐 www.aaruchudar.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card - Gradient */}
            <div className="relative overflow-hidden rounded-2xl p-6 shadow-xl bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Business Hours</h3>
                    <div className="space-y-2 text-white/90">
                      <p className="flex justify-between"><span>Mon - Fri:</span><span>9:00 AM - 6:00 PM</span></p>
                      <p className="flex justify-between"><span>Saturday:</span><span>10:00 AM - 2:00 PM</span></p>
                      <p className="flex justify-between"><span>Sunday:</span><span>Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2563eb]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb]/10 to-[#1e3a8a]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Connect With Us</h3>
              </div>
              <div className="flex gap-3 pl-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 ${social.color} hover:scale-110 hover:text-white group/social`}
                    aria-label={social.name}
                  >
                    <div className="transition-transform group-hover/social:scale-110">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          75% { transform: translateY(10px) translateX(-5px); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}