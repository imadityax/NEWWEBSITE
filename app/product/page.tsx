'use client'

import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("Labs")

  const productData = {
    "Labs": {
      title: "Human Intelligence Labs",
      intro: "Experiential learning spaces designed to build creativity, critical thinking, and leadership through real-world application.",
      items: [
        { name: "Clarity as Culture", desc: "Builds clarity as a consistent way of thinking.", img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400' },
        { name: "Decision Making Without Drama", desc: "Enables calm and practical decision-making.", img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400' },
        { name: "Inner Focus in a Noisy World", desc: "Strengthens mental focus despite distractions.", img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400' },
        { name: "The Power of Listening", desc: "Develops true understanding and connection.", img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400' },
        { name: "Intelligent Conflict and Recovery", desc: "Handles conflicts with awareness.", img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400' },
        { name: "Systematic Thinking", desc: "Encourages structured problem-solving.", img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400' },
        { name: "Voice, Value and Vulnerability", desc: "Builds authentic self-expression.", img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400' },
        { name: "Leadership Without Imitation", desc: "Develops original leadership and ownership.", img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400' },
      ],
      isFeature: false,
      description: ""
    },
    "Courses": {
      title: "Human Intelligence Courses",
      intro: "Structured programs that combine practical experience with deeper understanding for meaningful growth.",
      items: [
        { name: "Clarity as Culture", desc: "Transform your mindset for purposeful action.", img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400' },
        { name: "Decision Making Without Drama", desc: "Master confident, stress-free decision-making.", img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400' },
        { name: "Inner Focus in Noisy Worlds", desc: "Develop concentration in a distracted world.", img: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=400' },
        { name: "The Power of Listening", desc: "Transform how you communicate and relate.", img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400' },
        { name: "Intelligent Conflict & Recovery", desc: "Build relationships using effective techniques.", img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400' },
        { name: "Systematic Thinking", desc: "Demystify complex problems into clear solutions.", img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' },
        { name: "Mind Architect", desc: "Advanced program on cognitive architecture.", img: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400' },
        { name: "Human Intelligence Workshops", desc: "Hands-on sessions for creativity and execution.", img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400' },
      ],
      isFeature: false,
      description: ""
    },
    "Workshops": {
      title: "Our Core Workshops",
      intro: "Hands-on, activity-based sessions that develop creativity, teamwork, and execution skills.",
      items: [
        { name: "Mind Architecture", desc: "Reshape thinking patterns for clarity and control.", img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400' },
        { name: "Cognitive Networks", desc: "Build foundations for critical thinking and challenge handling.", img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400' },
        { name: "Innovation Circuits", desc: "Develop creative thinking and leadership with confidence.", img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400' },
      ],
      isFeature: false,
      description: ""
    },
    "Brain Gym": {
      title: "Brain Gym",
      intro: "Cognitive training that keeps the brain active and sharp.",
      items: [
        { name: "Thinking Brain", desc: "Activates the brain's thinking center.", img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400' },
        { name: "Emotional Brain", desc: "Exercises for emotional awareness and control.", img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400' },
        { name: "Focus & Attention", desc: "Strengthens concentration and presence.", img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400' },
        { name: "Memory & Learning", desc: "Enhances retention and recall.", img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400' },
        { name: "Balance & Coordination", desc: "Improves brain-body connection.", img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
      ],
      isFeature: false,
      description: "",
    }
  }

  const tabs = ["Labs", "Courses", "Workshops", "Brain Gym"]

  return (
    <main className="min-h-screen bg-[#fcfcfc]">

      {/* HERO */}
      <section className="relative min-h-[80vh] text-white flex items-center justify-center px-6 py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />


        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">
            Aaruchudar
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Innovative Products
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            We are pioneers in human-centered research and intelligent solutions,
            dedicated to transforming how humanity learns, thinks, and progresses.
          </p>
        </div>
      </section>

      {/* TABS + CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === tab
                    ? "bg-[#2563eb] text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-bold text-[#2563eb] mb-4 text-center">
              {productData[activeTab as keyof typeof productData].title}
            </h3>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              {productData[activeTab as keyof typeof productData].intro}
            </p>

            {productData[activeTab as keyof typeof productData].isFeature ? (
              <div className="text-center p-10 bg-blue-50 rounded-2xl">
                <p className="text-lg text-gray-700 italic">
                  "{productData[activeTab as keyof typeof productData].description}"
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(productData[activeTab as keyof typeof productData] as { items?: any[] }).items?.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-[#f8fafc] rounded-2xl border border-gray-100 hover:border-blue-200 transition-all overflow-hidden"
                    >
                      {item.img && (
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}