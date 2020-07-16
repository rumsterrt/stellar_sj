import React from 'react'
import { View } from 'react-native'
import './index.styl'

const MainCard = ({ children, isFirst, isLast }) => {
  console.log('asdasd', isFirst, isLast, children)
  return pug`
    View.root(styleName=isFirst ? 'first' : isLast ? 'last' : '')
      = children
    `
}

export default MainCard
