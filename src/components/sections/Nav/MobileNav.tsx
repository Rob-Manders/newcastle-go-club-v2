import React from 'react'
import styled from 'styled-components'

const MobileNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  a + a {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1.5rem;
  }
`

export default function MobileNav(): JSX.Element {
  return (
    <MobileNavContainer>
      <a href='#home'>Home</a>
      <a href='#meetings'>Meetings</a>
      <a href='#contact'>Contact</a>
    </MobileNavContainer>
  )
}
