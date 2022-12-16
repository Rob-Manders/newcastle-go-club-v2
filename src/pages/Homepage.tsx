import React from 'react'
import PageDivider from '../components/elements/PageDivider'
import PageContainer from '../components/layout/PageContainer'
import Welcome from '../components/sections/Welcome'
import Map from '../components/elements/Map'
import Meetings from '../components/sections/Meetings'
import Contact from '../components/sections/Contact'
import Announcement from '../components/sections/Announcement'

export default function Homepage(): JSX.Element {
  return (
    <PageContainer>
      <Announcement>
        <>
          <h2>Christmas & New Year Meetings</h2>

          <p>
            We'll be taking a two week break over Christmas and New Year, so our
            next meeting will be <strong>Thursday 6th January</strong>.
          </p>
          <p>
            If you've joined us on Meetup but haven't come along to a meeting
            yet, please feel free to join us in the new year. Everyone is
            welcome, even if you've never played Go before.
          </p>
          <p>
            We've had a number of new players join us this year, and it's been
            wonderful to see them learn to play Go, start to progress and become
            better at the game.
          </p>
          <p>Have a great Christmas, and we hope to see you in the new year.</p>
        </>
      </Announcement>

      <Welcome />
      <PageDivider />
      <Meetings />
      <PageDivider />
      <Contact />
    </PageContainer>
  )
}
