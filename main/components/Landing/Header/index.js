import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import { emit } from 'startupjs'
import { Link } from 'components'
import './index.styl'

const base = BASE_URL

const Header = () => {
  return pug`
    View.header
      Image.rocket(source={uri:base + '/img/logo.svg'})
      Text.logoText STELLAR
      Text.description 
        = 'Just another free, fully responsive site'
        br
        = ' template built by '
        Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = '@ajlkn'
        = ' for '
        Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = 'HTML5 UP'
    `
}

export default Header
