import React from 'react'
import styled from 'styled-components'

interface Props {
  className: string
  url: string
}

const Button = styled.a`
  display: flex;
  align-items: center;
  background: rgb(255, 122, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 122, 0, 1) 0%,
    rgba(255, 0, 105, 1) 33%,
    rgba(211, 0, 197, 1) 66%,
    rgba(118, 56, 250, 1) 100%
  );
  color: rgb(255, 255, 255);
  height: 48px;
  width: 48px;
  text-decoration: none;
  font-size: 1.25rem;
  border-radius: 5px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  /* transition: 150ms ease-in-out; */

  .instagram-icon {
    fill: #fff;
    height: 40px;
    margin: auto;
  }

  .button-text {
    display: none;
    margin-right: 0.75rem;
    margin-left: auto;
    font-weight: 400;
    margin-top: 0.25rem;
  }

  &:hover,
  &:focus {
    background: rgb(176, 80, 21);
  }

  @media (min-width: 1400px) {
    width: 175px;

    .instagram-icon {
      margin: 0.35rem;
    }

    .button-text {
      display: block;
    }
  }
`

export default function InstagramButton({
  className,
  url
}: Props): JSX.Element {
  return (
    <Button className={className} href={url}>
      <svg
        className='instagram-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
      </svg>
      <span className='button-text'>Instagram</span>
    </Button>
  )
}