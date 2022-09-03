import React from 'react'
import styled from 'styled-components'

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.2) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  margin: 40px auto;

  @media (min-width: 550px) {
    margin: 80px auto;
  }
`

export default function PageDivider(): JSX.Element {
  return <Divider />
}
