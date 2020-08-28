import React from 'react'
import { Text, View } from 'react-native'
import { Button, Title } from 'components'
import { emit } from 'startupjs'
import './index.styl'

const GetStarted = () => {
  return pug`
    Title.title(text='Congue imperdiet')
    Text.description 
      = 'Donec imperdiet consequat consequat. Suspendisse feugiat congue'
      br
      = 'posuere. Nulla massa urna, fermentum eget quam aliquet.'
    View.buttonContainer
      Button.button(text='Get Started' type="secondary" onPress=()=>emit('url','/about'))
      Button.button.second(text='Learn More' onPress=()=>emit('url','/about'))
    `
}

export default GetStarted
