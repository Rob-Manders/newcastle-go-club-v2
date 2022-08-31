import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Container = styled.main`
  max-width: 1200px;
  margin: 0 1rem;
  margin-top: 3rem;
`

export default function PageContainer({ children }: Props): JSX.Element {
  return <Container>{children}</Container>
}
