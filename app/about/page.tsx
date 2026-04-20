'use client'

import Footer from "@/components/Footer";



export default function AboutPage(){
  const bubbles = Array.from({length:18},(_,i)=>i);
  return (
    <>
   
      <main className="min-h-screen bg-[#f5f5f5] text-black  overflow-x-hidden">
           
        {/* HERO SECTION - Who You Are */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-[#0d47a1] to-[#1a3a70] text-white flex items-center justify-center px-6 py-20 overflow-hidden">
          {bubbles.map((i)=>{ const size=[20,28,36,48,64,80][i%6]; const left=(i*13)%100; const top=(i*17)%100; const opacity=(i%4+2)/10; return <div key={i} className="absolute rounded-full bg-white/10" style={{width:size,height:size,left:`${left}%`,top:`${top}%`,opacity}}/>})}
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">Aaruchudar</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Advancing Human Intelligence Through Innovation</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">We are pioneers in human-centered research and intelligent solutions, dedicated to transforming how humanity learns, thinks, and progresses.</p>
            <button className="bg-[#64b5f6] hover:bg-[#42a5f5] text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors">
              Explore Our Journey
            </button>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#1a3a70]">Mission & Vision</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Mission */}
              <div className="bg-[#e3f2fd] rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-bold text-[#1565c0] mb-6 flex items-center gap-3">
                  <span className="text-4xl">🎯</span> Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-8">To advance human intelligence through cutting-edge research, ethical innovation, and collaborative science. We unlock the potential of human cognition and create technologies that amplify human capabilities while maintaining the highest ethical standards.</p>
              </div>

              {/* Vision */}
              <div className="bg-[#f3e5f5] rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-bold text-[#6a1b9a] mb-6 flex items-center gap-3">
                  <span className="text-4xl">🌟</span> Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-8">A world where human intelligence is augmented by technology, where innovation serves humanity, and where knowledge and wisdom are accessible to all. We envision a future where human potential is limitless.</p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Innovation', desc: 'Pioneering breakthrough solutions through continuous research and development.', icon: '💡', color: 'bg-[#fef3e0]', textColor: 'text-[#e65100]' },
                { title: 'Collaboration', desc: 'Building better solutions through teamwork, partnerships, and community engagement.', icon: '🤝', color: 'bg-[#e8f5e9]', textColor: 'text-[#2e7d32]' },
                { title: 'Ethics', desc: 'Ensuring responsible innovation with integrity and respect for human values.', icon: '⚖️', color: 'bg-[#eceff1]', textColor: 'text-[#37474f]' }
              ].map((value) => (
                <div key={value.title} className={`${value.color} rounded-xl p-8`}>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className={`${value.textColor} text-2xl font-bold mb-3`}>{value.title}</h4>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#1a3a70]">Our Story</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-10 shadow-lg border-l-4 border-[#0d47a1]">
                <h3 className="text-2xl font-bold text-[#0d47a1] mb-4">A Journey of Innovation and Impact</h3>
                <p className="text-lg text-gray-700 leading-8">Aaruchudar was born from a vision to redefine the future through technology and human ingenuity. Established in 2010 by a team of passionate technologists and researchers, we've evolved into a global solutions provider dedicated to creating meaningful progress and sustainable growth for businesses and communities worldwide.</p>
              </div>

              <div className="bg-white rounded-xl p-10 shadow-lg border-l-4 border-[#1565c0]">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Our Evolution</h3>
                <p className="text-lg text-gray-700 leading-8">From our humble beginnings to becoming a leader in human intelligence research, our journey is a testament to our unwavering commitment to excellence. We've helped over 300 global clients across 10+ industries transform their operations through intelligent solutions and human-centered design.</p>
              </div>

              <div className="bg-white rounded-xl p-10 shadow-lg border-l-4 border-[#6a1b9a]">
                <h3 className="text-2xl font-bold text-[#6a1b9a] mb-4">Our Commitment</h3>
                <p className="text-lg text-gray-700 leading-8">We believe in the transformative power of collaboration and the importance of balancing innovation with responsibility. Every product we create, every research initiative we undertake, and every partnership we forge is guided by our commitment to creating lasting, positive impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#1a3a70]">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Research & Development',
                  desc: 'Cutting-edge research in AI, neuroscience, and cognitive science to push the boundaries of human intelligence.',
                  color: 'bg-[#e3f2fd]',
                  titleColor: 'text-[#1565c0]'
                },
                {
                  title: 'Product Innovation',
                  desc: 'Developing intelligent products and platforms that enhance human capabilities and improve quality of life.',
                  color: 'bg-[#f3e5f5]',
                  titleColor: 'text-[#6a1b9a]'
                },
                {
                  title: 'Strategic Consulting',
                  desc: 'Guiding organizations through digital transformation and intelligent system implementation.',
                  color: 'bg-[#e8f5e9]',
                  titleColor: 'text-[#2e7d32]'
                },
                {
                  title: 'Education & Training',
                  desc: 'Empowering teams and communities with knowledge and skills in AI and human-centered technology.',
                  color: 'bg-[#fff3e0]',
                  titleColor: 'text-[#e65100]'
                },
                {
                  title: 'Data Analytics',
                  desc: 'Transforming raw data into actionable insights for smarter decision-making.',
                  color: 'bg-[#fce4ec]',
                  titleColor: 'text-[#c2185b]'
                },
                {
                  title: 'Ethical Governance',
                  desc: 'Establishing frameworks for responsible AI development and deployment across industries.',
                  color: 'bg-[#eceff1]',
                  titleColor: 'text-[#37474f]'
                }
              ].map((item) => (
                <div key={item.title} className={`${item.color} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow`}>
                  <h4 className={`${item.titleColor} text-2xl font-bold mb-4`}>{item.title}</h4>
                  <p className="text-gray-700 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#2d67d6] via-[#235ad0] to-[#1447b5] text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Why Choose Us</h2>
            
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {[
                {
                  icon: '✓',
                  title: '15+ Years of Excellence',
                  desc: 'Over a decade and a half of proven expertise in innovation and research.'
                },
                {
                  icon: '✓',
                  title: '300+ Global Clients',
                  desc: 'Trusted by organizations worldwide to deliver transformative solutions.'
                },
                {
                  icon: '✓',
                  title: '45+ Products Delivered',
                  desc: 'A diverse portfolio of successful products that have shaped industries.'
                },
                {
                  icon: '✓',
                  title: '200+ Dedicated Experts',
                  desc: 'A world-class team of researchers, engineers, and thought leaders.'
                },
                {
                  icon: '✓',
                  title: '10+ Industries Served',
                  desc: 'Experience across healthcare, finance, tech, education, and more.'
                },
                {
                  icon: '✓',
                  title: '5 Global Locations',
                  desc: 'Presence across major tech hubs ensuring local and global reach.'
                }
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                  <div className="text-4xl font-bold mb-4 text-[#64b5f6]">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-white/90">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                ['Innovation','We continuously push boundaries with breakthrough research and cutting-edge solutions.'],
                ['Collaboration','We partner with clients and experts to co-create solutions that truly make a difference.'],
                ['Sustainability','We commit to responsible innovation that creates lasting, positive impact on society.']
              ].map(([title,desc]) => (
                <div key={title} className="bg-white/10 backdrop-blur rounded-xl p-7 border border-white/25 shadow-2xl min-h-[280px] flex flex-col justify-between">
                  <h4 className="text-4xl font-semibold mb-5">{title}</h4>
                  <p className="text-white/90 leading-7">{desc}</p>
                  <div className="mt-6 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center">◌</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-24 px-6 bg-[#f7f7f7]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#1a3a70]">Our Team</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-12 mb-12">
              <div className="text-center mb-16">
                <h4 className="text-3xl font-semibold text-[#1a3a70] mb-2">Executive Leadership</h4>
                <p className="text-gray-600">Guiding our vision and strategy for global impact</p>
              </div>

              <div className="flex justify-center mb-12">
                <div className="bg-[#1a3a70] text-white rounded-lg px-8 py-4 font-semibold text-lg">
                  Chief Executive Officer
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Research & Innovation',
                    items: ['Neuroscience Lab', 'AI Research Team', 'Product Development']
                  },
                  {
                    title: 'Operations & Strategy',
                    items: ['Business Development', 'Strategic Planning', 'Market Analytics']
                  },
                  {
                    title: 'Impact & Community',
                    items: ['Education Programs', 'Community Outreach', 'Ethics & Governance']
                  }
                ].map((dept) => (
                  <div key={dept.title} className="border-2 border-[#1a3a70] rounded-xl p-8">
                    <h5 className="text-xl font-bold text-[#1a3a70] mb-6 pb-4 border-b-2 border-[#1a3a70]">{dept.title}</h5>
                    <ul className="space-y-4">
                      {dept.items.map((item) => (
                        <li key={item} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-[#1a3a70] rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#e3f2fd] rounded-xl p-8">
                <h4 className="text-2xl font-bold text-[#1565c0] mb-6">Our Teams</h4>
                <p className="text-gray-700 leading-7 mb-4">Our diverse teams bring together world-class talent from academia, industry, and research institutions. Each team member is committed to advancing human intelligence and driving positive change.</p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>✓ Cross-functional collaboration</span>
                  <span>✓ Global perspective</span>
                </div>
              </div>

              <div className="bg-[#f3e5f5] rounded-xl p-8">
                <h4 className="text-2xl font-bold text-[#6a1b9a] mb-6">Diversity & Inclusion</h4>
                <p className="text-gray-700 leading-7 mb-4">We celebrate diversity and foster an inclusive environment where all voices are heard. We believe that diverse perspectives drive innovation and create better solutions.</p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>✓ Equal opportunity</span>
                  <span>✓ Inclusive culture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS / STATS SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2d67d6] via-[#235ad0] to-[#1447b5] py-24 px-6 text-white">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 mb-16">
              {[
                ['15+','Years of Excellence'],
                ['300+','Global Clients'],
                ['45+','Products Delivered'],
                ['200+','Dedicated Experts'],
                ['10+','Industries Served'],
                ['5','Global Locations']
              ].map(([n,t]) => (
                <div key={t}>
                  <div className="text-6xl md:text-7xl font-bold tracking-tight">{n}</div>
                  <div className="mt-2 text-lg">{t}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
              {[
                { title: 'Award Winning', desc: 'Recognized globally for innovation, leadership, and excellence in research and development.' },
                { title: 'Industry Trusted', desc: 'A partner of choice for Fortune 500 companies and innovative startups worldwide.' },
                { title: 'Impact Driven', desc: 'Committed to creating positive change in society through responsible innovation and community engagement.' }
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white/10 backdrop-blur rounded-xl p-7 border border-white/25 shadow-2xl">
                  <h4 className="text-3xl font-semibold mb-4">{title}</h4>
                  <p className="text-white/90 leading-7">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6 bg-[#0d47a1] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">Join us on our mission to advance human intelligence and create meaningful impact. Whether you're looking to innovate, collaborate, or join our team, we'd love to work with you.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Explore Solutions',
                  desc: 'Discover how our products and services can transform your organization.',
                  cta: 'Learn More'
                },
                {
                  title: 'Join Our Team',
                  desc: 'Be part of a mission-driven organization working on cutting-edge research.',
                  cta: 'View Careers'
                },
                {
                  title: 'Get In Touch',
                  desc: 'Connect with our team to discuss partnerships and opportunities.',
                  cta: 'Contact Us'
                }
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
                  <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                  <p className="text-white/80 mb-6">{item.desc}</p>
                  <button className="bg-[#64b5f6] hover:bg-[#42a5f5] text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    {item.cta}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-12 border border-white/20">
              <h4 className="text-3xl font-bold mb-8">Get In Touch</h4>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60"/>
                <input type="email" placeholder="Your Email" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60"/>
              </div>
              <textarea placeholder="Your Message" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60 h-32 mb-8"></textarea>
              <button className="w-full bg-[#64b5f6] hover:bg-[#42a5f5] text-white font-bold py-3 rounded-lg transition-colors text-lg">
                Send Message
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

       
      </main>
    </>
  )
}
