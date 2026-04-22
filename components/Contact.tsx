'use client'
import { Mail, Phone, MapPin, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function Contact(){
  const faqs = [
    {
      q: 'How can I get in touch for collaborations?',
      a: 'Reach out through our contact form or email us directly. We review every inquiry carefully.',
    },
    {
      q: 'Where can I find information on campaigns and releases?',
      a: 'Visit our updates section for the latest launches, campaigns and announcements.',
    },
    {
      q: 'How can I reach customer support?',
      a: 'Our support team is available through email and business hours contact channels.',
    },
    {
      q: 'How to purchase our products/services?',
      a: 'Send us your requirements and our team will guide you with the right solution.',
    },
  ]

  const [open, setOpen] = useState(0)

  return (
    <section className='min-h-screen bg-white px-6 md:px-14 py-10'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start'>
        <div>
        
          <h1 className='text-6xl md:text-8xl font-black leading-none text-black'>
            CONTACT <span className='text-[#0f1f45]'>US</span>
          </h1>

          <p className='mt-6 text-gray-600 max-w-md'>
            For inquiries, collaborations, or to say hello, we'd love to hear from you. Reach out and let's connect.
          </p>

          <div className='mt-10 space-y-8'>
            

            <div>
              <h3 className='font-black text-2xl mb-2'>Mail</h3>
              <p className='text-gray-600 flex gap-2 items-center'>
                <Mail size={18} /> hi@aaruchudar.com
              </p>
            </div>

            <div>
              <h3 className='font-black text-2xl mb-2'>HEAD OFFICE</h3>
              <p className='text-gray-600 flex gap-2 items-start'>
                <MapPin size={18} /> Chennai, India
              </p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='rounded-[2rem] bg-[#0f1f45] h-[680px] overflow-hidden relative p-10'>
            <div className='absolute inset-0 bg-gradient-to-br from-[#0f1f45] to-[#1e3a8a]' />
            <div className='relative z-10 text-white'>
              <p className='uppercase tracking-[0.35em] text-sm mb-3'>Let's Build</p>
              <h2 className='text-5xl font-black leading-tight'>Future Ready Experiences</h2>
              <p className='mt-4 text-white/80 max-w-sm'>We create digital systems, products and modern brand experiences.</p>
            </div>
            <div className='absolute bottom-0 right-0 w-[80%] h-[70%] bg-white/10 rounded-tl-[3rem]' />
          </div>
        </div>
      </div>

      
    </section>
  )
}