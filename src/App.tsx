import React from 'react'
import SiteContainer from './components/layout/SiteContainer'
import Nav from './components/sections/Header'
import Homepage from './pages/Homepage'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <SiteContainer>
      <Nav />
      <Homepage />
      <Footer />
    </SiteContainer>
  )
}
