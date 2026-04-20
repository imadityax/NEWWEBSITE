import { Share2, X, Video, Lock } from 'lucide-react'

export default function Footer(){
  const cols = {
    PRODUCTS:['Billing','Collections','RevRec','Reporting','AI Tools','Integrations'],
    SOLUTIONS:['Finance & Accounting','RevOps','Product Engineering','Partners','Hybrid Models'],
    RESOURCES:['Customers','Resource Center','Webinars','Blog','Videos'],
    COMPANY:['About','Careers','Newsroom','Security']
  }

  return (
    <footer className='relative bg-[#f5f5f5] px-8 md:px-16 pt-20 pb-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-5 gap-10 relative z-10'>
        {Object.entries(cols).map(([title,items]) => (
          <div key={title}>
            <h4 className='text-xs tracking-[0.3em] font-bold text-gray-700 mb-8'>{title}</h4>
            <ul className='space-y-4 text-gray-800'>
              {items.map((item)=><li key={item} className='hover:text-black cursor-pointer transition'>{item}</li>)}
            </ul>
          </div>
        ))}
        <div className='md:col-span-1'>
          <div className='border border-gray-200 rounded-2xl p-4 bg-white mb-10'>
            <div className='h-20 rounded-xl bg-gradient-to-r from-[#0f1f45] to-[#1e40af] mb-4'/>
            <p className='text-xs tracking-[0.3em] text-sky-700 font-bold'>DEMO VIDEO</p>
            <p className='text-xl font-semibold mt-2'>See Our Work</p>
          </div>

          <div className='flex gap-3'>
            <div className='w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center'><Share2 size={18}/></div>
            <div className='w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center'><X size={18}/></div>
            <div className='w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center'><Video size={18}/></div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-12 left-0 w-full text-[220px] md:text-[320px] font-black leading-none text-black/[0.03] select-none whitespace-nowrap px-8'>AARUCHUDAR</div>

      <div className='max-w-7xl mx-auto mt-44 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-gray-500 text-sm'>
        <div className='flex flex-wrap gap-8'>
          <span>© 2026 AARUCHUDAR. All rights reserved.</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>

        <div className='flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 bg-white'>
          <Lock size={14}/>
          <span>Secure & Trusted</span>
        </div>
      </div>
    </footer>
  )
}