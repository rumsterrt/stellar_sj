import React from 'react'
import Header from '../../components/Landing/Header'
import Intro from '../../components/Landing/Intro'
import FirstSection from '../../components/Landing/FirstSection'
import SecondSection from '../../components/Landing/SecondSection'
import GetStarted from '../../components/Landing/GetStarted'
import Footer from '../../components/Landing/Footer'
import MainCard from '../../components/Landing/MainCard'
import { Image, Text } from 'react-native'
import { emit } from 'startupjs'
import { Link } from 'components'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL

const PLanding = () => {
  return pug`
    Header  
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
    MainCard(isFirst=true)
      Intro
    MainCard
      FirstSection
    MainCard
      SecondSection
    MainCard(isLast=true)
      GetStarted
    Footer
  `
}

export default PLanding
