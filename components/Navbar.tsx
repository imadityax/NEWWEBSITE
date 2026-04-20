'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()


  const links = [
    { name: 'Home', href: '/' },
    {name:'Product', href:'/product'},
    { name: 'About', href: '/about' },
    { name: 'blog', href: '/blog' },
    { name: 'careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"

      >
        <div className="max-w-7xl mx-auto px-6 md:px-0 py-6 flex items-center justify-end">

          {/* Logo */}
         
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5"
          >
            <span className="w-7 h-1 bg-white rounded-full"></span>
            <span className="w-5 h-1 bg-white rounded-full ml-auto"></span>
            <span className="w-7 h-1 bg-white rounded-full"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[340px]  text-white z-[60] transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-4xl mb-10"
          >
            ×
          </button>

          <div className="space-y-6 text-3xl">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-50"
        />
      )}
    </>
  )
}