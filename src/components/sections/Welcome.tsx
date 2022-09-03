import React from 'react'
import styled from 'styled-components'
import SectionContainer from '../layout/SectionContainer'
import clubImage from '../../assets/images/club-01.jpg'
import FacebookButton from '../elements/SocialButtons/FacebookButton'
import MeetupButton from '../elements/SocialButtons/MeetupButton'

const WelcomeSection = styled.div`
  scroll-margin-top: calc(120px + 3rem);

  .content {
    display: flex;
    flex-direction: column;

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

    p {
      margin: 0;
      margin-top: 1rem;
    }

    .social-buttons {
      display: flex;
      margin: 1rem auto;

      a + a {
        margin-left: 0.75rem;
      }
    }
  }

  img {
    width: 100%;
    max-width: 420px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;

    .content {
      margin-right: 3.5rem;

      .h2 {
        margin: 0;
      }

      .social-buttons {
        margin: auto 0 0 auto;
      }
    }
  }
`

export default function Welcome(): JSX.Element {
  return (
    <SectionContainer id='home'>
      <WelcomeSection>
        <img src={clubImage} alt='Jamie and Lewis playing Go' />

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
            Association’s <a href='https://www.britgo.org/whatisgo'>About Go</a>{' '}
            page.
          </p>

          <div className='social-buttons'>
            <FacebookButton
              className='social-button'
              url='https://www.facebook.com/NewcastleGoClub/'
            />
            <MeetupButton
              className='social-button'
              url='https://www.meetup.com/en-AU/newcastle-go-club/'
            />
          </div>
        </div>
      </WelcomeSection>
    </SectionContainer>
  )
}
