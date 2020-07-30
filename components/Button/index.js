import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import './index.styl'

const Button = ({ text, onPress = () => {}, style, type = '' }) => {
  return pug`
    TouchableOpacity.root(onPress=onPress style=style styleName=type)
      Text.text(styleName=type) #{text}
    `
}

export default Button
