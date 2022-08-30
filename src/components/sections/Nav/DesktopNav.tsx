import React from 'react'
import styled from 'styled-components'

const DesktopNavLinks = styled.nav`
  display: flex;

  a + a {
    margin-left: 2.5rem;
  }

  a {
    position: relative;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1.25rem;
    text-decoration: none;

    &:hover::after,
    &:focus::after {
      content: '';
      position: absolute;
      background-color: rgb(176, 80, 21);
      height: 4px;
      left: -5px;
      right: -5px;
      bottom: -0.75rem;
      border-radius: 2px;
    }
  }
`

export default function DesktopNav(): JSX.Element {
  return (
    <DesktopNavLinks>
      <a href='#home'>Home</a>
      <a href='#meetings'>Meetings</a>
      <a href='#contact'>Contact</a>
    </DesktopNavLinks>
  )
}
