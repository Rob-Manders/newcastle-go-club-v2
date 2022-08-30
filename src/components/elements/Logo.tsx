import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.h1`
  margin: 0;
  width: fit-content;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .sub-header {
    color: hsla(0, 0%, 0%, 0.9);
    font-size: 1.25rem;
    font-weight: 500;
  }

  .header {
    color: rgb(176, 80, 21);
    font-size: 2.25rem;
    margin-top: -0.4rem;
  }
`

export default function Logo(): JSX.Element {
  return (
    <LogoContainer>
      <a href='#home'>
        <span className='sub-header'>Newcastle</span>
        <span className='header'>Go Club</span>
      </a>
    </LogoContainer>
  )
}
