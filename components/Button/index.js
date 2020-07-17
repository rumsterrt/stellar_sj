import React from 'react'
import { TouchableOpacity } from 'react-native'
import './index.styl'

const Button = ({ text, onPress = () => {}, style, type = '' }) => {
  return pug`
    TouchableOpacity.root(onPress=onPress style=style styleName=type)
      = text
    `
}

export default Button
