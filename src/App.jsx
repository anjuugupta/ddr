import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './pages/Header'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import CareerForm from './pages/CareerForm'
import Software from './pages/Software'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<CareerForm />} />
        <Route path="/software" element={<Software />} />
      </Routes>
    </Router>
  )
}

export default App
