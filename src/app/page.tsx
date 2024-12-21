import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  )
}

export default page