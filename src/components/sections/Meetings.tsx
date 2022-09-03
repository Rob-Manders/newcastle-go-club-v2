import React from 'react'
import styled from 'styled-components'
import Map from '../elements/Map'
import SectionContainer from '../layout/SectionContainer'

const MeetingsSection = styled.div`
  scroll-margin-top: calc(120px + 3rem);

  .content {
    h2 {
      margin: 0;
    }

    .time {
      font-size: 2.5rem;
      margin: 0;
      margin-top: 1rem;
    }

    .place {
      font-size: 2rem;
      margin: 0;
      opacity: 0.8;
    }
  }

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: row-reverse;

    .content {
      margin-left: 3.5rem;
    }
  }
`

export default function Meetings(): JSX.Element {
  return (
    <SectionContainer>
      <MeetingsSection id='meetings'>
        <div className='content'>
          <h2>Meetings</h2>
          <p className='time'>7pm every Thursday</p>
          <p className='place'>Benton Ale House</p>
          <p>
            The Benton Ale House is an incredibly welcoming venue and has been a
            good home for our club.
          </p>
          <p>There is on site parking and disabled access to the rear.</p>
          <p>
            For public transport connections, the Four Lane Ends interchange is
            just round the corner for both buses and the Metro.
          </p>
          <p>
            You can find out more about the Benton Ale House on their&nbsp;
            <a href='https://en-gb.facebook.com/TheBentonAleHouseAtLongBenton/'>
              Facebook Page
            </a>
          </p>
        </div>
        <Map
          apiKey='AIzaSyDELpcbkMle2OUpJwR-vKKLFWh4NRP9Fro'
          location='Benton Ale House, Longbenton, Newcastle upon Tyne NE7 7XE'
        />
      </MeetingsSection>
    </SectionContainer>
  )
}
