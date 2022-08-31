import React from 'react'
import styled from 'styled-components'
import SectionContainer from '../layout/SectionContainer'

const WelcomeSection = styled.div``

export default function Welcome(): JSX.Element {
  return (
    <SectionContainer>
      <WelcomeSection>
        <h2>
          <span>Welcome to</span>
          Newcastle Go Club
        </h2>
        <p>We are a group of Go players from Newcastle upon Tyne.</p>
        <p>
          We meet at 7pm every Thursday at the Benton Ale House and are open to
          all players, regardless of age or skill level.
        </p>
        <p>
          If you have never played Go before then don’t worry. We have
          everything you need and would be happy to teach you. If you’re not
          sure what Go is, you can find our more at the British Go
          Association’s&nbsp;
          <a href='https://www.britgo.org/whatisgo'>About Go</a> page.
        </p>
      </WelcomeSection>
    </SectionContainer>
  )
}
