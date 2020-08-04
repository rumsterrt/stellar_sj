import React from 'react'
import { View, Text } from 'react-native'
import { Button, Icon, Link } from 'components'
import { emit } from 'startupjs'
import './index.styl'

const Footer = () => {
  return pug`
    View.root
      View.container
        View.top
          Text.title
            = 'Aliquam sed mauris'
          Text.description 
            = 'Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.'
          Button.button(text='Learn More' onPress=()=>emit('url','/about') type="transparent")
        View.bottom
          Text.title
            = 'Etiam feugiat'
          View.table
            View.row.first
              Text.name Address
              Text.value 1234 Somewhere Road • Nashville, TN 00000 • USA
            View.row
              Text.name Phone
              Text.value (000) 000-0000 x 0000
            View.row
              Text.name Email
              Link.value information@untitled.tld
          View.icons
            Button.icon(icon={name:['fab',"twitter"]} styleName='first')
            Button.icon(icon={name:['fab',"facebook"]})
            Button.icon(icon={name:['fab',"instagram"]})
            Button.icon(icon={name:['fab',"github"]})
            Button.icon(icon={name:['fab',"dribbble"]})
      Text.copyright 
        = '© Untitled. Design: '
        Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = 'HTML5 UP'
        = ' Demo Images: '
        Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = 'Unsplash'
        = '.'
    `
}

export default Footer
