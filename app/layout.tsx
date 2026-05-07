import type { Metadata } from 'next'
import { Inter, Great_Vibes, Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aaruchudar - Cognitive Learning Systems',
  description:
    'Pioneering cognitive development center advancing human intelligence through neurotechnology.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body
        className={`${inter.className} bg-background text-foreground overflow-x-hidden antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}