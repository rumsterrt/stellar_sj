import React from 'react'
import { View, Text } from 'react-native'
import { Button, Title, Icon } from 'components'
import { emit } from 'startupjs'
import './index.styl'

const items = [
  {
    icon: ['far', 'comment'],
    color: 'rgb(239, 168, 176)',
    subtitle: 'Ipsum consequat',
    description:
      'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
  },
  {
    icon: ['far', 'copy'],
    color: 'rgb(168, 156, 200)',
    subtitle: 'Amed sed feugiat',
    description:
      'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
  },
  {
    icon: ['far', 'angry'],
    color: 'rgb(140, 201, 240)',
    subtitle: 'Dolor nullam',
    description:
      'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
  }
]

const FirstSection = () => {
  return pug`
    Title.title(text='Magna veroeros')
    View.list
      each item, index in items
        View.listItem(key=index styleName=[{first: index === 0, secondRow: index > 1}])
          View.imageView
            View.icon
              Icon(name=item.icon size=65 color=item.color)
          Text.subtitle #{item.subtitle}
          Text.description #{item.description}
    Button.button(text='Learn More' onPress=()=>emit('url','/about'))
    `
}

export default FirstSection
