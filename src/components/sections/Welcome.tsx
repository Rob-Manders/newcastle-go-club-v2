import React from 'react'
import styled from 'styled-components'
import SectionContainer from '../layout/SectionContainer'
import clubImage from '../../assets/images/club-01.jpg'

const WelcomeSection = styled.div`
  h2 {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;

    span {
      color: rgba(0, 0, 0, 0.9);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (min-width: 1400px) {
    display: flex;

    .content {
      margin-right: 3.5rem;
    }
  }
`

export default function Welcome(): JSX.Element {
  return (
    <SectionContainer>
      <WelcomeSection>
        <div className='content'>
          <h2>
            <span>Welcome to</span>
            Newcastle Go Club
          </h2>
          <p>We are a group of Go players from Newcastle upon Tyne.</p>
          <p>
            We meet at 7pm every Thursday at the Benton Ale House and are open
            to all players, regardless of age or skill level.
          </p>
          <p>
            If you have never played Go before then don’t worry. We have
            everything you need and would be happy to teach you. If you’re not
            sure what Go is, you can find our more at the British Go
            Association’s&nbsp;
            <a href='https://www.britgo.org/whatisgo'>About Go</a> page.
          </p>
        </div>

        <img src={clubImage} />
      </WelcomeSection>
    </SectionContainer>
  )
}
