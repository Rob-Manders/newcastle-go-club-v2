import React from 'react'
import PageContainer from './components/layout/PageContainer'
import ContentContainer from './components/layout/ContentContainer'
import Nav from './components/sections/Header'

export default function App() {
  return (
    <PageContainer>
      <Nav />
      <ContentContainer>
        {/* 
          Welcome
          --
          Meetings
          --
          Contact
          --
          Footer
        */}
      </ContentContainer>
    </PageContainer>
  )
}
