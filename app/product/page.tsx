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
        { name: "Clarity as Culture", desc: "Builds clarity as a consistent way of thinking." },
        { name: "Decision Making Without Drama", desc: "Enables calm and practical decision-making." },
        { name: "Inner Focus in a Noisy World", desc: "Strengthens mental focus despite distractions." },
        { name: "The Power of Listening", desc: "Develops true understanding and connection." },
        { name: "Intelligent Conflict and Recovery", desc: "Handles conflicts with awareness." },
        { name: "Systematic Thinking", desc: "Encourages structured problem-solving." },
        { name: "Voice, Value and Vulnerability", desc: "Builds authentic self-expression." },
        { name: "Leadership Without Imitation", desc: "Develops original leadership and ownership." }
      ],
      isFeature: false,
      description: ""
    },
    "Courses": {
      title: "Human Intelligence Courses",
      intro: "Structured programs that combine practical experience with deeper understanding for meaningful growth.",
      items: [
        { name: "Clarity as Culture", desc: "Transform your mindset for purposeful action." },
        { name: "Decision Making Without Drama", desc: "Master confident, stress-free decision-making." },
        { name: "Inner Focus in Noisy Worlds", desc: "Develop concentration in a distracted world." },
        { name: "The Power of Listening", desc: "Transform how you communicate and relate." },
        { name: "Intelligent Conflict & Recovery", desc: "Build relationships using effective techniques." },
        { name: "Systematic Thinking", desc: "Demystify complex problems into clear solutions." },
        { name: "Mind Architect", desc: "Advanced program on cognitive architecture." },
        { name: "Human Intelligence Workshops", desc: "Hands-on sessions for creativity and execution." }
      ],
      isFeature: false,
      description: ""
    },
    "Workshops": {
      title: "Our Core Workshops",
      intro: "Hands-on, activity-based sessions that develop creativity, teamwork, and execution skills.",
      items: [
        { name: "Mind Architecture", desc: "Reshape thinking patterns for clarity and control." },
        { name: "Cognitive Networks", desc: "Build foundations for critical thinking and challenge handling." },
        { name: "Innovation Circuits", desc: "Develop creative thinking and leadership with confidence." }
      ],
      isFeature: false,
      description: ""
    },
    "Brain Gym": {
      title: "Brain Gym",
      intro: "Cognitive training that keeps the brain active and sharp.",
      items: [
        { name: "Thinking Brain", desc: "Activates the brain’s thinking center." },
        { name: "Emotional Brain", desc: "Exercises for emotional awareness and control." },
        { name: "Focus & Attention", desc: "Strengthens concentration and presence." },
        { name: "Memory & Learning", desc: "Enhances retention and recall." },
        { name: "Balance & Coordination", desc: "Improves brain-body connection." }
      ],
      isFeature: false,
      description: "",
    }
  }

  const tabs = ["Labs", "Courses", "Workshops", "Brain Gym"]
  const bubbles = Array.from({ length: 18 }, (_, i) => i);

  return (

    <main className="min-h-screen bg-[#fcfcfc]">
      <section className="relative min-h-[80vh] text-white flex items-center justify-center px-6 py-20 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Blue brand overlay — keeps consistency with rest of site */}
       

        {/* Content — unchanged */}
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

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === tab ? "bg-[#2563eb] text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200"}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-bold text-[#2563eb] mb-4 text-center">{productData[activeTab as keyof typeof productData].title}</h3>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">{productData[activeTab as keyof typeof productData].intro}</p>

            {productData[activeTab as keyof typeof productData].isFeature ? (
              <div className="text-center p-10 bg-blue-50 rounded-2xl">
                <p className="text-lg text-gray-700 italic">"{productData[activeTab as keyof typeof productData].description}"</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(productData[activeTab as keyof typeof productData] as { items?: any[] }).items?.map((item: any, index: number) => (
                  <div key={index} className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-100 hover:border-blue-200 transition-all">
                    <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}