export default function OurWorks(){
  const cards=[
    {title:'Marketplace UI', cls:'top-12 right-10 bg-yellow-400 w-64 h-28'},
    {title:'Blockchain App', cls:'left-8 top-64 bg-pink-300 w-64 h-32'},
    {title:'Mobile Product', cls:'right-32 top-56 bg-white w-52 h-24'}
    
  ];

  return (
    <section className='w-full min-h-screen bg-white rounded-3xl p-8 md:p-16 overflow-hidden relative'>
      <div className='absolute w-40 h-40 bg-pink-200/40 rounded-full -top-10 -left-10' />
      <div className='absolute w-40 h-40 bg-purple-200/30 rounded-full top-10 -right-10' />

      <h2 className='text-5xl md:text-6xl font-black tracking-tight mb-10'>Our Work</h2>

      <div className='relative max-w-5xl mx-auto mt-10'>
        <div className='mx-auto w-full max-w-4xl h-[430px] bg-gray-200 rounded-[28px] shadow-2xl border-[14px] border-gray-100 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600' />

          <div className='absolute left-8 top-12 text-white max-w-sm'>
            <p className='uppercase text-xs tracking-[0.4em] opacity-80'>Post your cars</p>
            <h3 className='text-4xl font-black leading-tight mt-4'>AN INDUSTRY'S LEADING CAR-SELLING PLATFORM</h3>
            <button className='mt-6 px-5 py-2 rounded-full bg-teal-400 text-black font-semibold'>Let's Talk</button>
          </div>

          <div className='absolute right-8 bottom-8 grid grid-cols-2 gap-4 w-[42%]'>
            <div className='bg-white rounded-2xl h-28' />
            <div className='bg-teal-300 rounded-2xl h-28' />
            <div className='bg-white rounded-2xl h-28' />
            <div className='bg-cyan-300 rounded-2xl h-28' />
          </div>
        </div>

        {cards.map((card,i)=>(
          <div key={i} className={`absolute rounded-2xl shadow-xl p-4 ${card.cls}`}>
            <div className='text-sm font-bold text-black/80'>{card.title}</div>
          </div>
        ))}

        <div className='mx-auto w-full max-w-5xl h-8 bg-gray-300 rounded-b-full mt-2 shadow-inner' />
      </div>

      <p className='text-center tracking-[0.6em] text-xl mt-14'>WEBSITE</p>
    </section>
  )
}
