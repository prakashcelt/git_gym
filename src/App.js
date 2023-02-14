import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Offer from './components/Offer'
import About from './components/About'
import Contact from './components/Contact'
import Offerdetails from './components/Offerdetails'
// import ImageSlider from './components/ImageSlider.js'
import Offerofficial from './components/Offerofficial.js'
// import Slidey from './components/Slidey'
import HeroSlider from './components/HeroSlider'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <ImageSlider/> */}
      <Feature/>
      {/* <Slidey/> */}
      <Offer/>
      <Offerdetails/>
      <Offerofficial/>
      <About/>
      <HeroSlider/>
      <Contact/>
    </div>
  )
}
