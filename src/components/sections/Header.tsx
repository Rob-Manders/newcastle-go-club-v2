import React from 'react'
import styled from 'styled-components'
import Logo from '../elements/Logo'
import DesktopNav from './Nav/DesktopNav'
import MobileMenuIcon from '../elements/MobileMenuIcon'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  padding: 0 1.5rem;

  .desktop-nav {
    display: none;
  }

  @media (min-width: 550px) {
    padding: 0 2rem;

    .mobile-menu-icon {
      display: none;
    }

    .desktop-nav {
      display: block;
    }
  }

  @media (min-width: 1500px) {
    padding: 0;
  }
`

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo />
      <MobileMenuIcon
        className='mobile-menu-icon'
        menuOpen={false}
        action={() => console.log('Toggle menu...')}
      />
      <DesktopNav className='desktop-nav' />
    </HeaderContainer>
  )
}
