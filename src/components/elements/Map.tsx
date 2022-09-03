import React from 'react'
import styled from 'styled-components'

interface Props {
  apiKey: string
  location: string
}

const MapFrame = styled.iframe`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1.5;
  border: none;
  border-radius: 10px;
`

export default function Map({ apiKey, location }: Props): JSX.Element {
  return (
    <MapFrame
      loading='lazy'
      src={`
				https://www.google.com/maps/embed/v1/place
				?key=${apiKey}
				&zoom=13
				&q=${location}
			`}
    />
  )
}
