import React, { ReactChild } from 'react'
import styled from 'styled-components'
import Logo from '../elements/Logo'
import DesktopNav from './Nav/DesktopNav'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  padding: 0 2rem;

  @media (min-width: 1500px) {
    padding: 0;
  }
`

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo />
      <DesktopNav />
    </HeaderContainer>
  )
}
