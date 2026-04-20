'use client'

export default function CareersPage() {
  const jobs = [
    {
      title: 'Frontend Developer',
      type: 'Full Time',
      location: 'Remote / Chennai',
      desc: 'Build premium web interfaces using Next.js, React and modern UI systems.',
    },
    {
      title: 'AI Engineer',
      type: 'Full Time',
      location: 'Hybrid',
      desc: 'Work on machine learning systems, automation pipelines and intelligent products.',
    },
    {
      title: 'UI/UX Designer',
      type: 'Contract',
      location: 'Remote',
      desc: 'Design world-class digital experiences with clean interaction systems.',
    },
    {
      title: 'Backend Developer',
      type: 'Full Time',
      location: 'Remote / Onsite',
      desc: 'Develop secure scalable APIs, cloud systems and enterprise architecture.',
    },
  ]
const bubbles = Array.from({length:18},(_,i)=>i);
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d47a1] to-[#1a3a70] text-white py-28 px-6">
        {bubbles.map((i: number)=>{ const size=[20,28,36,48,64,80][i%6]; const left=(i*13)%100; const top=(i*17)%100; const opacity=(i%4+2)/10; return <div key={i} className="absolute rounded-full bg-white/10" style={{width:size,height:size,left:`${left}%`,top:`${top}%`,opacity}}/>})}
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-5">Careers at Aaruchudar</p>
          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            Build The Future With Us.
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/80 leading-8">
            Join a team of creators, engineers and thinkers building intelligent products that make real impact.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600">Flexible</h3>
            <p className="mt-4 text-gray-600 leading-8">Remote-friendly culture with high ownership and freedom.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600">Growth</h3>
            <p className="mt-4 text-gray-600 leading-8">Fast learning environment with real opportunities to lead.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600">Impact</h3>
            <p className="mt-4 text-gray-600 leading-8">Work on meaningful products shaping tomorrow.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Open Positions</h2>
            <p className="text-gray-500">4 Active Roles</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Role</p>
                    <h3 className="text-2xl font-semibold">{job.title}</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Type</p>
                    <p className="font-medium">{job.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Location</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                  <div className="md:text-right">
                    <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 leading-8">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-14">
          <h3 className="text-4xl md:text-5xl font-bold">Don’t See Your Role?</h3>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-8">
            We’re always looking for exceptional talent. Send us your profile and let’s talk.
          </p>
          <button className="mt-8 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:scale-105 transition">
            Send Resume
          </button>
        </div>
      </section>
    </main>
  )
}