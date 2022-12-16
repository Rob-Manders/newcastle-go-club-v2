import React from 'react'
import styled from 'styled-components'

const AnnouncementContainer = styled.section`
  background-color: #fcd9d9;
  border: 2px solid #ffaaaa;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 3rem;

  h2 {
    color: #850e0e;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

export default function Announcement({
  children
}: {
  children: JSX.Element
}): JSX.Element {
  return <AnnouncementContainer>{children}</AnnouncementContainer>
}
