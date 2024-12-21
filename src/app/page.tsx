import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page