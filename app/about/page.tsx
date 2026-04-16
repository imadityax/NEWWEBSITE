export default function AboutPage(){
  const bubbles = Array.from({length:18},(_,i)=>i);
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black overflow-hidden">
      <section className="py-20 px-6 text-center bg-white">
        <h1 className="text-6xl font-serif font-semibold text-[#2f5aa8] mb-8">Aaruchudar</h1>
        <h2 className="text-5xl font-bold max-w-4xl mx-auto leading-tight mb-8">Our Story: A Journey of Innovation and Impact.</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-8">Aaruchudar was born from a vision to redefine the future through technology and human ingenuity. Established in 2010 by a team of passionate technologists, we've evolved into a global solutions provider, dedicated to creating meaningful progress and sustainable growth for businesses and communities.</p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-8 mt-6">Our journey is a testament to our unwavering commitment to excellence and our belief in the transformative power of collaboration.</p>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2d67d6] via-[#235ad0] to-[#1447b5] py-24 px-6 text-white">
        {bubbles.map((i)=>{ const size=[20,28,36,48,64,80][i%6]; const left=(i*13)%100; const top=(i*17)%100; const opacity=(i%4+2)/10; return <div key={i} className="absolute rounded-full bg-white/20" style={{width:size,height:size,left:`${left}%`,top:`${top}%`,opacity}}/>})}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-bold mb-14">Core Pillars of<br/>Aaruchudar</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 mb-20">
            {[
              ['15+','Years of Excellence'],['300+','Global Clients'],['45+','Products Delivered'],['200+','Dedicated Experts'],['10+','Industries Served'],['5','Global Locations']
            ].map(([n,t]) => (
              <div key={t}>
                <div className="text-6xl md:text-7xl font-bold tracking-tight">{n}</div>
                <div className="mt-2 text-lg">{t}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              ['Innovation','Innovation is a vehicle enabling progress and breakthrough solutions through technology.'],
              ['Collaboration','Collaboration and co-creation power innovative and community driven solutions.'],
              ['Sustainability','Sustainability is a core value driving responsible innovation and lasting impact.']
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

      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center border-t border-gray-200 pt-14">
          <div>
            <h3 className="text-4xl font-bold mb-6">Aaruchudar Software Solutions Pvt. Ltd.</h3>
            <p className="text-lg text-gray-700 leading-8">3000 Caman Street<br/>+91 987358 0000<br/>aaruchudar@rvmarix.com</p>
            <div className="flex gap-4 mt-6 text-2xl">
              <span>◉</span><span>◎</span><span>◌</span><span>◍</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 place-items-center">
            {['RV Matrix 2025','Excellence Award','Leadership Award','Best Brand'].map((a)=>(
              <div key={a} className="bg-white border rounded-2xl p-8 text-center font-semibold shadow-md w-full h-36 flex items-center justify-center">{a}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0b49c8] to-[#2d67d6] text-white py-10 text-center text-5xl font-serif tracking-wide">Aaruchudar<br/><span className="text-2xl font-sans tracking-[0.35em] uppercase">Endless Innovation</span></section>
    </main>
  )
}
