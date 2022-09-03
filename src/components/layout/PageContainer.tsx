import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Container = styled.main`
  max-width: 1200px;
  margin: 3rem 1rem 0;

  @media (min-width: 1400px) {
    margin: 3rem auto 0;
  }
`

export default function PageContainer({ children }: Props): JSX.Element {
  return <Container>{children}</Container>
}
