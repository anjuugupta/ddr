import { useState } from 'react'

import './App.css'
import Header from './pages/Header'
import HeroBanner from './components/HeroBanner'
import CtaSection from './components/CtsSection'
import IndustrySection from './components/IndustrySection'
import AboutUsSection from './components/AboutUsSection'
import ScrollCard from './components/ScrollCard'
import ContactUsSection from './components/ContactUsSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroBanner/>
      <CtaSection/>
      <IndustrySection/>
      {/* <AboutUsSection/>
      <ScrollCard/>
      <ContactUsSection/> */}
      <Footer/>
    </>
  )
}

export default App
