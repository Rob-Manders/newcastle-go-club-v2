import React from 'react'
import SectionContainer from '../layout/SectionContainer'
import styled from 'styled-components'
import Map from '../elements/Map'

const TournamentSection = styled.div`
  background-color: #f3f3f3;
  margin: 40px auto;
  padding: 2rem;
  border-radius: 10px;

  @media (min-width: 900px) {
    display: flex;

    .content {
      width: 100%;
      flex-grow: 1;
    }
  }

  @media (min-width: 750px) {
    margin: 80px auto;
  }
`

export default function Tournament() {
  return (
    <SectionContainer id='tournament'>
      <TournamentSection>
        <div className='content'>
          <h2>Go Tournament 2025</h2>
          <h3>Saturday 30th August - Sunday 31st August</h3>

          <p>We are pleased to announce Newcastle's first Go tournament!</p>

          <p>
            <strong>Entry fees:</strong>

            <ul>
              <li>£10 for BGA members and concessions</li>
              <li>£20 for all other entrants</li>
            </ul>
          </p>

          <p>
            <strong>Friday 29th Evening: </strong>
          </p>

          <p>Meeting in pub function room for casual Go. Details TBC.</p>

          <p>
            <strong>Saturday 30th August</strong>
            <ul>
              <li>9:30 - Registration</li>
              <li>10:00 - Three rounds ending at 17:15</li>
            </ul>
            We will be meeting at a restaurant in Chinatown in the evening for
            anyone who wishes to join.
          </p>

          <p>
            <strong>Sunday 31st August</strong>

            <ul>
              <li>10:00 - 2 Rounds</li>
              <li>15:15 - Awarding of Prizes</li>
            </ul>
          </p>
        </div>

        <Map
          apiKey='AIzaSyDELpcbkMle2OUpJwR-vKKLFWh4NRP9Fro'
          location='Urban Sciences Building, Newcastle University, 1 Science Square, Newcastle upon Tyne NE4 5TG'
        />
      </TournamentSection>
    </SectionContainer>
  )
}
