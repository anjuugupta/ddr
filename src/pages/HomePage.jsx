import { useState } from 'react'
import Header from './Header'
import HeroBanner from '../components/HeroBanner'
import CtaSection from "../components/CtsSection"
import IndustrySection from "../components/IndustrySection"
import ScrollCard from "../components/ScrollCard"
import ContactUsSection from "../components/ContactUsSection"
import Footer from "../components/Footer"





function HomePage() {

  return (

<>
<HeroBanner/>
<CtaSection/>
<IndustrySection/>
<ScrollCard/>
<ContactUsSection/>
<Footer/>
</>
    
  )
}

export default HomePage
