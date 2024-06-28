import React from 'react'
import PageDivider from '../components/elements/PageDivider'
import PageContainer from '../components/layout/PageContainer'
import Welcome from '../components/sections/Welcome'
import Map from '../components/elements/Map'
import Meetings from '../components/sections/Meetings'
import Contact from '../components/sections/Contact'
import Announcement from '../components/sections/Announcement'
import Tournament from '../components/sections/Tournament'

export default function Homepage(): JSX.Element {
  return (
    <PageContainer>
      <Welcome />
      {/* <PageDivider /> */}
      <Tournament />
      {/* <PageDivider /> */}
      <Meetings />
      <PageDivider />
      <Contact />
    </PageContainer>
  )
}
