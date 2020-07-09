import React from 'react'
import { View, Image } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL

const Header = () => {
  return pug`
        View.header
            Image.rocket(
                source={uri:base + '/img/logo.svg'}
            )
    `
}

export default Header
