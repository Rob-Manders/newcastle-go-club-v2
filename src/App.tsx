import React from 'react'
import PageContainer from './components/layout/PageContainer'
import SiteContainer from './components/layout/SiteContainer'
import Nav from './components/sections/Header'
import Homepage from './pages/Homepage'

export default function App() {
  return (
    <SiteContainer>
      <Nav />
      <Homepage />
    </SiteContainer>
  )
}
