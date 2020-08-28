import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import { Layout } from '@startupjs/ui'

export default observer(function ({ children }) {
  return pug`
    Layout
      View.layout
        View.wrapper= children
  `
})
