import React from 'react'
import styled from 'styled-components'
import menuIcon from '../../assets/icons/bars-solid.svg'
import closeIcon from '../../assets/icons/xmark-solid.svg'

interface Props {
  className: string
  menuOpen: boolean
  action: () => void
}

const MobileMenuButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
`

export default function MobileMenuIcon({
  className,
  menuOpen,
  action
}: Props): JSX.Element {
  return (
    <MobileMenuButton className={className} onClick={action}>
      <img src={menuOpen ? closeIcon : menuIcon} width='32' height='32' />
    </MobileMenuButton>
  )
}
