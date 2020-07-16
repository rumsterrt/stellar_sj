import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import { Button, Title } from 'components'
import { emit } from '@startupjs/react-sharedb'
import './index.styl'

const base = BASE_URL

const Intro = () => {
  return pug`
    View.wrapper
      View.imageView
        Image.image(source={uri:base + '/img/pic01.jpg'})
      View.container
        Title.title(text='Ipsum sed adipiscing')
        Text.description 
          = 'Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.'
        Button.button(text='Learn More' onPress=()=>emit('url','/about'))
    `
}

export default Intro
