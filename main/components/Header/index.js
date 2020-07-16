import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Header = ({ children }) => {
  return pug`
    View.header
      = children
    `
}

export default Header
