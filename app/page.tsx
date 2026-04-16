import Hero from '@/components/Hero'
import About from '@/components/Homeabout'
import Services from '@/components/Services'
import OurWorks from '@/components/OurWorks'
import Blog from '@/components/Blog'
import CenterServices from '@/components/CenterServices'
import WorkingOn from '@/components/WorkingOn'
import Contact from '@/components/Contact'
import StatsAndClients from '@/components/StatsAndClients'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <OurWorks />
      <Blog />
      <CenterServices />
      <WorkingOn />
      {/* Repeat WorkingOn as per design */}
      <WorkingOn />
      <Contact />
      <StatsAndClients />
      <Footer />
    </main>
  )
}
