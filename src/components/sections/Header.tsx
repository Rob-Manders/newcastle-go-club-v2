import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../elements/Logo'
import DesktopNav from './Nav/DesktopNav'
import MobileMenuIcon from '../elements/MobileMenuIcon'
import MobileNav from './Nav/MobileNav'

const HeaderContainer = styled.header`
  position: relative;
  background-color: #e0e0e0;
  min-height: 100px;
  padding: 1.5rem 1.5rem;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .desktop-nav {
    display: none;
  }

  @media (min-width: 550px) {
    padding: 1.5rem 2rem;

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

export default function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(true)

  return (
    <HeaderContainer>
      <div className='header-inner'>
        <Logo />
        <MobileMenuIcon
          className='mobile-menu-icon'
          menuOpen={menuOpen}
          action={() => setMenuOpen(prevState => !prevState)}
        />
        <DesktopNav className='desktop-nav' />
      </div>
      {menuOpen && <MobileNav />}
    </HeaderContainer>
  )
}
