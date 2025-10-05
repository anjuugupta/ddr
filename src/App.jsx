import { useState } from 'react'

import './App.css'
import Header from './pages/Header'
import HeroBanner from './components/HeroBanner'
import CtaSection from './components/CtsSection'
import IndustrySection from './components/IndustrySection'
import ScrollCard from './components/ScrollCard'
import ContactUsSection from './components/ContactUsSection'
import Footer from './components/Footer'
import About from './components/about'
import Service from './pages/Services'
import CareerForm from './pages/CareerForm'

function App() {

  return (
    <>
      <Header />
      <HeroBanner/>
      <CtaSection/>
      <IndustrySection/>
      <About/>
      <ScrollCard/>
      <ContactUsSection/>
      {/* <Service/>
      <CareerForm/> */}
      <Footer/>
    </>
  )
}

export default App
