import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Footer/>
    </main>
  )
}
