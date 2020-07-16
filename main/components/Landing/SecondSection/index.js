import React from 'react'
import { Text, View } from 'react-native'
import { Button, Title, Icon } from 'components'
import './index.styl'

const statisticBlocks = [
  {
    name: 'Etiam',
    icon: ['far', 'grimace'],
    value: '5,120',
    color: 'rgb(239, 168, 176)'
  },
  {
    name: 'Magna',
    icon: ['far', 'folder-open'],
    value: '8,192',
    color: 'rgb(199, 156, 200);'
  },
  {
    name: 'Tempus',
    icon: ['far', 'frown'],
    value: '2,048',
    color: 'rgb(168, 156, 200);'
  },
  {
    name: 'Aliquam',
    icon: ['far', 'hand-rock'],
    value: '4,096',
    color: 'rgb(155, 178, 225)'
  },
  {
    name: 'Nullam',
    icon: ['far', 'gem'],
    value: '1,024',
    color: 'rgb(140, 201, 240);'
  }
]

const SecondSection = () => {
  return pug`
    Title.title(text='Ipsum consequat')
    Text.description 
      = 'Donec imperdiet consequat consequat. Suspendisse feugiat congue'
      br
      = 'posuere. Nulla massa urna, fermentum eget quam aliquet.'
    View.statistic
      each block, index in statisticBlocks
        View.block(
          style={backgroundColor: block.color}
          key=block.name
          styleName= (index === 0 ? 'first' : index === statisticBlocks.length - 1 ? 'last' : '')
        )
          Icon(name=block.icon size=50 color="white")
          Text.value #{block.value}
          Text.name #{block.name}
    Text.content 
      = 'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.'
    Button.button(text='Learn More' onPress=()=>{})
    `
}

export default SecondSection
