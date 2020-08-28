import React, { useState } from 'react'
import Header from '../../components/Header'
import Intro from '../../components/Landing/Intro'
import FirstSection from '../../components/Landing/FirstSection'
import SecondSection from '../../components/Landing/SecondSection'
import GetStarted from '../../components/Landing/GetStarted'
import Footer from '../../components/Footer'
import MainCard from '../../components/MainCard'
import { Image, Text, Dimensions } from 'react-native'
import { emit } from 'startupjs'
import { Link, Button } from 'components'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL

const navItems = ['Introduction', 'First Section', 'Second Section', 'Get Started']

const PLanding = () => {
  const [selectedNav, setSelectedNav] = useState(0)

  const handleNavItemPress = (index) => () => {
    setSelectedNav(index)
  }

  return pug`
    Header  
      Image.rocket(source={uri:base + '/img/logo.svg'})
      Text.logoText Stellar
      Text.description 
        = 'Just another free, fully responsive site'
        br
        = ' template built by '
        Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = '@ajlkn'
        = ' for '
        Link(onPress=() => emit('url', 'https://twitter.com/ajlkn'))
          = 'HTML5 UP'
    MainCard.nav(isFirst=true)
      each navItem, index in navItems
        Button.navItem(
          key=navItem
          text=navItem
          styleName=[{first: index === 0, active: index === selectedNav}]
          onPress=handleNavItemPress(index)
        )
    MainCard(isFirst=Dimensions.get('window').width < 700)
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
