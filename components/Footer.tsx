import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Services from './Services'

export default function Footer() {
  const cols = {
    Labs: [
      { name: 'Clarity as Culture', href: '/' },
      { name: 'Decision Making Without Drama', href: '/' },
      { name: 'Inner Focus in a Noisy World', href: '/' },
      { name: 'The Power of Listening', href: '/' },
      { name: 'Intelligent Conflict and Recovery', href: '/' },
      { name: 'Systematic Thinking', href: '/' },
      { name: 'Voice, Value and Vulnerability', href: '/' },
      { name: 'Leadership Without Limitation', href: '/' },
    ],

    'Brain Gym': [
      { name: 'Thinking Brain', href: '/' },
      { name: 'Emotional Brain', href: '/' },
      { name: 'Focus and Attention System', href: '/' },
      { name: 'Memory and learning System', href: '/' },
      { name: 'Balance and Coordination', href: '/' },
    ],

    PROGRAMS: [
      { name: 'Human Intelligence Labs', href: '/' },
      { name: 'Human Intelligence Courses', href: '/' },
      { name: 'Human Intelligence Workshop', href: '/' },
      { name: 'Brain Gym', href: '/' },

    ],

    COMPANY: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Career', href: '/career' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className='relative bg-[#f5f5f5] px-8 md:px-16 pt-20 pb-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-5 gap-10 relative z-10'>
        {Object.entries(cols).map(([title, items]) => (
          <div key={title}>
            <h4 className='text-xs tracking-[0.3em] font-bold text-gray-700 mb-8'>
              {title}
            </h4>

            <ul className='space-y-4 text-gray-800'>
              {items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='hover:text-black cursor-pointer transition'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className='md:col-span-1'>
          <div className='border border-gray-200 rounded-2xl p-4 bg-white mb-10'>
            <div className='h-20 rounded-xl bg-gradient-to-r from-[#0f1f45] to-[#1e40af] mb-4' />
            <p className='text-xs tracking-[0.3em] text-sky-700 font-bold'>
              DEMO VIDEO
            </p>
            <p className='text-xl font-semibold mt-2'>See Our Work</p>
          </div>

          <div className='flex gap-3'>
            <a
              href='https://instagram.com/aaruchudar'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-lg'
            >
              <FaInstagram />
            </a>

            <a
              href='https://www.linkedin.com/company/aaruchudar/posts/?feedView=all'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-lg'
            >
              <FaLinkedin />
            </a>

            <a
              href='https://twitter.com/Aaruchudar_06'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-lg'
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-12 left-0 w-full text-[200px] md:text-[250px] font-black leading-none text-black/[0.03] select-none whitespace-nowrap px-8'>
        AARUCHUDAR
      </div>

      <div className='max-w-7xl mx-auto mt-44 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-gray-500 text-sm'>
        <div className='flex flex-wrap gap-8'>
          <span>© 2026 AARUCHUDAR. All rights reserved.</span>
          
        </div>

        
      </div>
    </footer>
  )
}