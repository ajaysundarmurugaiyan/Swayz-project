import React from 'react'
import HeroSection from '../../components/about/HeroSection'
import MissionSection from '../../components/about/MissionSection'
import StatisticsSection from '../../components/about/StatisticsSection'
import AboutSways from '../../components/about/AboutSwayz'

const About = () => {
  return (
    <div>
        <HeroSection/>
        <StatisticsSection/>
        <AboutSways/>
        <MissionSection/>
    </div>
  )
}

export default About