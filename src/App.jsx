import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './pages/Header'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import CareerForm from './pages/CareerForm'
import SoftwareSolution from './pages/SoftwareSolution'
import WebsiteSalutions from './pages/WebsiteSalutions'
import OnlineTraning from './pages/OnlineTraning'
import ConsultationService from './pages/ConsultationService'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<CareerForm />} />
        <Route path="/software" element={<SoftwareSolution />} />
        <Route path='/website' element={<WebsiteSalutions/>} />
        <Route path='/online-traning' element={<OnlineTraning/>} />
        <Route path='/consultation' element={<ConsultationService/>} />
        
      </Routes>
    </Router>
  )
}

export default App
