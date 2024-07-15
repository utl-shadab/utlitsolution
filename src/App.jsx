import React from 'react'
import CustomNav from './components/Navbar/CustomNav'
import Services from './components/Services/Services'
import LogoSlider from './components/LogoSlider/LogoSlider'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Counter from './components/Counter/Counter'
import Client from './components/client/Client'
import Ecosystem from './components/Ecosystem/Ecosystem'
import Trends from './components/Trends/Trends'
import Solution from './components/Solution/Solution'
import Process from './components/Process/Process'
import Technology from './components/Technology/Technology'
import Industries from './components/Industries/Industries'

const App = () => {
  return (
    <div>
      <CustomNav />
      <Hero />
      <Counter />
      <Client />
      <Services />
      <Ecosystem />
      <Trends />
      <Solution />
      <Process />
      <Technology />
      <Industries />
      <LogoSlider/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App

