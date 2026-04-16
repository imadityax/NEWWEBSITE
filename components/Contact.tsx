'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="py-16 px-8 md:px-16 bg-gradient-to-br from-[#1a0a2e] via-[#2d1a5e] to-[#3d2080]">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <p className="text-white/60 text-sm mb-2">Get in Touch with Us</p>
          <h2 className="text-3xl font-bold text-white mb-3">Get in Touch with Us</h2>
          <p className="text-white/70 text-sm mb-6">
            Build a career advancing cognitive science and technology.
          </p>
          <button className="text-sm text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#1a0a2e] transition-colors">
            Call to-action →
          </button>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-white rounded-xl p-6 shadow-xl">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d0a4e] focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d0a4e] focus:border-transparent"
              />
              <textarea
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d0a4e] focus:border-transparent resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-[#2d0a4e] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#1a0a2e] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
