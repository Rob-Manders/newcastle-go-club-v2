import './scss/index.scss'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

const title = 'Newcastle Go Club'
const metaDescriptionText = `
	We are a group of Go players from Newcastle upon Tyne. We meet at 7pm every Thursday at the Benton Ale House and are open to all players, regardless of age or skill level. 
	If you have never played Go before then don’t worry. We have everything you need and would be happy to teach you. If you’re not sure what Go is, you can find our more at the British Go Association’s About Go page.
`

document.title = title

const metaDescription = document.createElement('meta')
metaDescription.name = 'description'
metaDescription.content = metaDescriptionText
document.getElementsByTagName('head')[0].appendChild(metaDescription)

const container = document.createElement('div')
container.classList.add('app')

document.body.appendChild(container)

const root = createRoot(container!)

root.render(<App />)
