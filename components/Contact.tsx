'use client'

import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-white px-5 sm:px-6 md:px-14 py-14 md:py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* Left */}
        <div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none text-black">

            CONTACT{' '}

            <span className="text-[#0f1f45]">
              US
            </span>

          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
            For inquiries, collaborations, or to say hello,
            we'd love to hear from you. Reach out and let's connect.
          </p>

          <div className="mt-10 space-y-8">

            {/* Mail */}
            <div>

              <h3 className="font-black text-xl sm:text-2xl mb-2">
                Mail
              </h3>

              <p className="text-gray-600 flex gap-2 items-center text-sm sm:text-base break-all">
                <Mail size={18} />
                hi@aaruchudar.com
              </p>

            </div>

            {/* Office */}
            <div>

              <h3 className="font-black text-xl sm:text-2xl mb-2 uppercase">
                Head Office
              </h3>

              <p className="text-gray-600 flex gap-2 items-start text-sm sm:text-base">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                Chennai, India
              </p>

            </div>

          </div>

        </div>

        {/* Right Card */}
        <div className="relative">

          <div className="rounded-[2rem] bg-[#0f1f45] min-h-[360px] sm:min-h-[500px] md:h-[680px] overflow-hidden relative p-6 sm:p-8 md:p-10">

            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f45] to-[#1e3a8a]" />

            <div className="relative z-10 text-white">

              <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[11px] sm:text-sm mb-3">
                Let's Build
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Future Ready Experiences
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-sm leading-relaxed">
                We create digital systems, products and modern brand experiences.
              </p>

            </div>

            {/* Decorative Shape */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[55%] sm:h-[65%] bg-white/10 rounded-tl-[3rem]" />

          </div>

        </div>

      </div>

    </section>
  )
}