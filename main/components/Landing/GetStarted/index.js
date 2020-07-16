import React from 'react'
import { Text, View } from 'react-native'
import { Button, Title } from 'components'
import './index.styl'

const GetStarted = () => {
  return pug`
    Title.title(text='Congue imperdiet')
    Text.description 
      = 'Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.'
    View.buttonContainer
      Button.button(text='Get Started' onPress=()=>{})
      Button.button.second(text='Learn More' onPress=()=>{})
    `
}

export default GetStarted
