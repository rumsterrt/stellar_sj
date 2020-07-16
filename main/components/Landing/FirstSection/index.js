import React from 'react'
import { View, Text } from 'react-native'
import { Button, Title, Icon } from 'components'
import './index.styl'

const FirstSection = () => {
  return pug`
    Title.title(text='Magna veroeros')
    View.list
      View.listItem
        View.imageView
          View.icon
            Icon(name=['far',"comment"] size=65 color="rgb(239, 168, 176)")
        Text.subtitle
          = 'Ipsum consequat'
        Text.description 
          = 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
      View.listItem
        View.imageView
          View.icon
            Icon(name=['far',"copy"] size=65 color="rgb(168, 156, 200)")
        Text.subtitle
          = 'Amed sed feugiat'
        Text.description 
          = 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
      View.listItem
        View.imageView
          View.icon
            Icon(name=['far',"angry"] size=65 color="rgb(140, 201, 240)")
        Text.subtitle
          = 'Dolor nullam'
        Text.description 
          = 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
    Button.button(text='Learn More' onPress=()=>{})
    `
}

export default FirstSection
