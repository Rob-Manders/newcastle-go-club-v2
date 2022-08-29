import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

export default function PageContainer({ children }: Props): JSX.Element {
  return <Container>{children}</Container>
}
