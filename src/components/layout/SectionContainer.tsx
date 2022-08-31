import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Section = styled.section``

export default function SectionContainer({ children }: Props): JSX.Element {
  return <Section>{children}</Section>
}
