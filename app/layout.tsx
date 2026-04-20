import type { Metadata } from 'next'
import { Inter, Great_Vibes, Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Aaruchudar - Cognitive Learning Systems',
  description: 'Pioneering cognitive development center advancing human intelligence through neurotechnology.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}