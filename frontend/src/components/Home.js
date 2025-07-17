import React from 'react'
import Features from './Features'
import Cta from './Cta'
import Footer from './Footer'
import Hero from './Hero'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Cta/>
      <Features/>
      <Footer/>
    </div>
  )
}
