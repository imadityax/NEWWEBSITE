import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

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
      { name: 'Memory and Learning System', href: '/' },
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
    <footer className="relative bg-[#f5f5f5] px-5 sm:px-8 md:px-16 pt-14 sm:pt-16 md:pt-20 pb-8 overflow-hidden">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">

        {Object.entries(cols).map(([title, items]) => (
          <div key={title}>

            <h4 className="text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] font-bold text-gray-700 mb-5 sm:mb-8 uppercase">
              {title}
            </h4>

            <ul className="space-y-3 sm:space-y-4 text-gray-800">

              {items.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="hover:text-black cursor-pointer transition text-sm sm:text-base leading-relaxed"
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>
        ))}

        {/* Social */}
        <div className="lg:col-span-1">

          <div className="flex gap-3 mt-2">

            <a
              href="https://instagram.com/aaruchudar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-lg hover:scale-105 transition-transform"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/aaruchudar/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-lg hover:scale-105 transition-transform"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/Aaruchudar_06"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-lg hover:scale-105 transition-transform"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Background Text */}
      <div className="absolute bottom-16 left-0 w-full text-[70px] sm:text-[120px] md:text-[180px] lg:text-[230px] font-black leading-none text-black/[0.03] select-none whitespace-nowrap px-5 sm:px-8">
        AARUCHUDAR
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-20 sm:mt-28 md:mt-40 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-gray-500 text-xs sm:text-sm">

        <div className="flex flex-wrap gap-4 sm:gap-8">

          <span>
            © 2026 AARUCHUDAR. All rights reserved.
          </span>

        </div>

      </div>

    </footer>
  )
}