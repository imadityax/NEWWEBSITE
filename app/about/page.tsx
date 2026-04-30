'use client'

import Footer from "@/components/Footer";



export default function AboutPage() {
  const bubbles = Array.from({ length: 18 }, (_, i) => i);
  return (
    <>

      <main className="min-h-screen bg-[#f5f5f5] text-black  overflow-x-hidden">

        {/* HERO SECTION - Who You Are */}
        <section className="relative min-h-[80vh] text-white flex items-center justify-center px-6 py-20 overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Dark + Blue tint overlay to match brand color */}
         

          {/* Content — unchanged */}
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">
              Aaruchudar
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We build minds that think,
              <br />
              not just minds that know.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A cognitive development platform helping students, professionals,
              and teams build clarity, focus, decision-making, and stronger
              real-world performance.
            </p>
          </div>
        </section>


        {/* MISSION & VISION SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#1a3a70]">
              Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">

              <div className="bg-[#e3f2fd] rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-bold text-[#1565c0] mb-6 flex items-center gap-3">
                  <span className="text-4xl">🎯</span> Our Mission
                </h3>

                <p className="text-lg text-gray-700 leading-8">
                  To develop human intelligence in the age of AI by strengthening
                  how individuals and teams think, decide, and perform in real-world situations.
                </p>
              </div>

              <div className="bg-[#f3e5f5] rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-bold text-[#6a1b9a] mb-6 flex items-center gap-3">
                  <span className="text-4xl">🌟</span> Our Vision
                </h3>

                <p className="text-lg text-gray-700 leading-8">
                  To become a leading cognitive training platform that transforms
                  how people think, learn, and perform across education and organizations.
                </p>
              </div>

            </div>


            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clarity",
                  desc: "Helping people move from confusion to structured understanding.",
                  icon: "🧠",
                  color: "bg-[#fef3e0]",
                  textColor: "text-[#e65100]",
                },
                {
                  title: "Growth",
                  desc: "Building thinking skills through consistent learning and practice.",
                  icon: "📈",
                  color: "bg-[#e8f5e9]",
                  textColor: "text-[#2e7d32]",
                },
                {
                  title: "Impact",
                  desc: "Creating measurable improvements in how people work and live.",
                  icon: "⚡",
                  color: "bg-[#eceff1]",
                  textColor: "text-[#37474f]",
                },
              ].map((value) => (
                <div key={value.title} className={`${value.color} rounded-xl p-8`}>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className={`${value.textColor} text-2xl font-bold mb-3`}>
                    {value.title}
                  </h4>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* OUR STORY SECTION */}
        <section className="py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#1a3a70]">
              Our Story
            </h2>

            <div className="space-y-8">

              <div className="bg-white rounded-xl p-10 shadow-lg border-l-4 border-[#0d47a1]">
                <h3 className="text-2xl font-bold text-[#0d47a1] mb-4">
                  How It Started
                </h3>

                <p className="text-lg text-gray-700 leading-8">
                  Aaruchudar started with a simple observation — people are taught
                  what to learn, but not how to think.
                </p>
              </div>

              <div className="bg-white rounded-xl p-10 shadow-lg border-l-4 border-[#1565c0]">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">
                  The Gap We Saw
                </h3>

                <p className="text-lg text-gray-700 leading-8">
                  Students, professionals, and teams often struggle not because of
                  lack of knowledge, but lack of clarity, focus, and decision-making.
                </p>
              </div>

              <div className="bg-white rounded-xl p-10 shadow-lg border-l-4 border-[#6a1b9a]">
                <h3 className="text-2xl font-bold text-[#6a1b9a] mb-4">
                  What We Became
                </h3>

                <p className="text-lg text-gray-700 leading-8">
                  What began as an idea is now a growing platform helping individuals
                  and teams think better and perform better through neuroscience-based learning.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* WHAT WE DO SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#1a3a70]">
              What We Do
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Human Intelligence Labs",
                  desc: "Experiential learning spaces designed to build creativity, critical thinking, and leadership.",
                  color: "bg-[#e3f2fd]",
                  titleColor: "text-[#1565c0]",
                },
                {
                  title: "Courses",
                  desc: "Structured programs combining practical experience with deeper understanding.",
                  color: "bg-[#f3e5f5]",
                  titleColor: "text-[#6a1b9a]",
                },
                {
                  title: "Workshops",
                  desc: "Hands-on sessions that develop teamwork, creativity, and execution skills.",
                  color: "bg-[#e8f5e9]",
                  titleColor: "text-[#2e7d32]",
                },
                {
                  title: "Brain Gym",
                  desc: "Cognitive exercises that improve focus, memory, and mental sharpness.",
                  color: "bg-[#fff3e0]",
                  titleColor: "text-[#e65100]",
                },
                {
                  title: "Team Development",
                  desc: "Helping organizations improve collaboration and communication.",
                  color: "bg-[#fce4ec]",
                  titleColor: "text-[#c2185b]",
                },
                {
                  title: "Performance Growth",
                  desc: "Turning thinking ability into real-life outcomes and stronger execution.",
                  color: "bg-[#eceff1]",
                  titleColor: "text-[#37474f]",
                },
              ].map((item) => (
                <div key={item.title} className={`${item.color} rounded-xl p-8 shadow-lg`}>
                  <h4 className={`${item.titleColor} text-2xl font-bold mb-4`}>
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ACHIEVEMENTS */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2d67d6] via-[#235ad0] to-[#1447b5] py-24 px-6 text-white">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Our Achievements
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
              {[
                ["250+", "Activities Built"],
                ["8", "Core Labs"],
                ["7", "Courses"],
                ["3", "Workshops"],
                ["5", "Training Areas"],
                ["2+", "Audience Groups"],
              ].map(([n, t]) => (
                <div key={t}>
                  <div className="text-6xl md:text-7xl font-bold">{n}</div>
                  <div className="mt-2 text-lg">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA SECTION */}
        

        {/* Footer */}
        <Footer />


      </main>
    </>
  )
}
