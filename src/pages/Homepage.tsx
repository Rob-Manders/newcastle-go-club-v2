import React from 'react'
import PageDivider from '../components/elements/PageDivider'
import PageContainer from '../components/layout/PageContainer'
import Welcome from '../components/sections/Welcome'

export default function Homepage(): JSX.Element {
  return (
    <PageContainer>
      <Welcome />
      <PageDivider />
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
