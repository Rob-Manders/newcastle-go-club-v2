import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import Welcome from '../components/sections/Welcome'

export default function Homepage(): JSX.Element {
  return (
    <PageContainer>
      <Welcome />
      {/* 
				Welcome
				--
				Meetings
				--
				Contact
			*/}
    </PageContainer>
  )
}
