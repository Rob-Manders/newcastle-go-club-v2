import React from 'react'
import styled from 'styled-components'
import SectionContainer from '../layout/SectionContainer'
import clubImage from '../../assets/images/club-02.jpg'

const ContactContainer = styled.div`
  img {
    width: 100%;
    max-width: 420px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    display: flex;

    .content {
      margin-right: 3.5rem;
    }
  }
`

export default function Contact(): JSX.Element {
  return (
    <SectionContainer id='contact'>
      <ContactContainer>
        <div className='content'>
          <h2>Contact Us</h2>
          <p>
            If you would like to find out more about Newcastle Go Club please
            feel free to get in touch.
          </p>
          <p>
            You can reach out to us on our{' '}
            <a href='https://www.facebook.com/NewcastleGoClub/'>Facebook</a> or{' '}
            <a href='https://www.meetup.com/en-AU/newcastle-go-club/'>Meetup</a>{' '}
            pages, or email Tom directly at{' '}
            <a href='mailto:tomcoulthard@nhs.net'>tomcoulthard@nhs.net</a>.
          </p>
        </div>

        <img src={clubImage} alt='a club meeting' />
      </ContactContainer>
    </SectionContainer>
  )
}
