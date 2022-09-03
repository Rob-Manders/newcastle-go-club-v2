import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  id: string
}

const Section = styled.section`
  scroll-margin-top: calc(120px + 3rem);
`

export default function SectionContainer({ children, id }: Props): JSX.Element {
  return <Section id={id}>{children}</Section>
}
