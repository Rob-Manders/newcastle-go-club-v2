import React from 'react'
import styled from 'styled-components'

interface Props {
  className: string
  url: string
}

const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgb(24, 119, 242);
  color: rgb(255, 255, 255);
  height: 48px;
  width: 48px;
  text-decoration: none;
  font-size: 1.25rem;
  border-radius: 5px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  /* transition: 150ms ease-in-out; */

  .facebook-icon {
    position: absolute;
    bottom: 0;
    fill: #fff;
    height: 40px;
    margin-left: 0.5rem;
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
    background-color: rgb(176, 80, 21);
  }

  @media (min-width: 1400px) {
    width: 175px;

    .button-text {
      display: block;
    }
  }
`

export default function FacebookButton({ className, url }: Props): JSX.Element {
  return (
    <Button className={className} href={url}>
      <svg
        className='facebook-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
      >
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
      </svg>
      <span className='button-text'>Facebook</span>
    </Button>
  )
}
