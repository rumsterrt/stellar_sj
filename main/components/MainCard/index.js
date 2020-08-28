import React from 'react'
import { View } from 'react-native'
import './index.styl'

const MainCard = ({ children, isFirst, isLast, style, onLayout }) => {
  return pug`
    View.root(styleName=[isFirst ? 'first' : '',isLast ? 'last' : ''] style=style onLayout=onLayout)
      = children
    `
}

export default MainCard
