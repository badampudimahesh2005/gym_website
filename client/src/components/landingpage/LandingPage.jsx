import React from 'react'
import Hero from './Hero'
import Features from './Features'
import RegisterSection from './RegisterSection'
import Plans from './Plans'
import Gallery from './Gallery'
import GymTrainers from './GymTrainers'

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <Features />
        <RegisterSection />
        <Plans />
        <Gallery />
        <GymTrainers />
    </div>
  )
}

export default LandingPage