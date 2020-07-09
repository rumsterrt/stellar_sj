import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Landing/Header'
import './index.styl'

const Landing = () => {
  return pug`
    View.main
      View.wrapper
        Header
  `
}

export default Landing
