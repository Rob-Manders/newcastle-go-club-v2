import React from 'react'
import PageContainer from './components/layout/PageContainer'
import ContentContainer from './components/layout/ContentContainer'
import Nav from './components/sections/Nav'

export default function App() {
  return (
    <PageContainer>
      <Nav />
      <ContentContainer>
        <h1>Newcastle Go Club</h1>
        <p>The big redesign...</p>
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
