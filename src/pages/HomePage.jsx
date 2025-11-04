import { useState } from 'react'
import Header from './Header'
import HeroBanner from '../components/HeroBanner'
import CtaSection from "../components/CtsSection"
import IndustrySection from "../components/IndustrySection"
import ScrollCard from "../components/ScrollCard"
import ContactUsSection from "../components/ContactUsSection"
import Footer from "../components/Footer"
import MarqueeText from '../components/MarqueeText'
import About from '../components/about'
import TechAndFeaturesSection from '../components/TechAndFeaturesSection'





function HomePage() {

  return (

<>
<HeroBanner/>
<CtaSection/>
<IndustrySection/>
<MarqueeText/>
<About/>
{/* <TechAndFeaturesSection/> */}
{/* <ScrollCard/> */}
<ContactUsSection/>
<Footer/>
</>
    
  )
}

export default HomePage
