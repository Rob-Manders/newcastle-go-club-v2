import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  font-size: 0.8rem;
  text-align: center;
  margin: 3.5rem auto;
  opacity: 0.75;
`

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <p>Copyright 2022 Newcastle Go Club</p>
      <a href='https://github.com/Rob-Manders/newcastle-go-club-v2'>GitHub</a>
    </FooterContainer>
  )
}
