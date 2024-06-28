import React from 'react'
import styled from 'styled-components'

const MobileNavContainer = styled.nav`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #e0e0e0;
  top: 110px;
  left: 0;
  right: 0;
  padding: 1.5rem;

  a + a {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(224, 224, 224, 1) 0%,
      rgba(224, 224, 224, 1) 10%,
      rgba(224, 224, 224, 0) 100%
    );
    /* background-color: red; */
    height: 1.5rem;
    left: 0;
    right: 0;
    bottom: -1.4rem;
  }
`

export default function MobileNav(): JSX.Element {
  return (
    <MobileNavContainer>
      <a href='#home'>Home</a>
      <a href='#tournament'>Tournament 2024</a>
      <a href='#meetings'>Meetings</a>
      <a href='#contact'>Contact</a>
    </MobileNavContainer>
  )
}
