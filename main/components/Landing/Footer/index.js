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
            = 'Ipsum sed adipiscing'
          Text.description 
            = 'Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.'
          Button.button(text='Learn More' onPress=()=>{} type="transparent")
        View.bottom
          Text.title
            = 'Etiam feugiat'
          View.table
            View.row
              Text.name Address
              Text.value 1234 Somewhere Road • Nashville, TN 00000 • USA
            View.row
              Text.name Phone
              Text.value (000) 000-0000 x 0000
            View.row
              Text.name Email
              Link.value information@untitled.tld
          dl
          View.icons
            Icon.icon(name=['fab',"twitter"] size=40 color='white' styleName='first')
            Icon.icon(name=['fab',"facebook"] size=40 color='white')
            Icon.icon(name=['fab',"instagram"] size=40 color='white')
            Icon.icon(name=['fab',"github"] size=40 color='white')
            Icon.icon(name=['fab',"dribbble"] size=40 color='white')
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
