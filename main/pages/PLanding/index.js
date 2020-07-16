import React from 'react'
import Header from '../../components/Landing/Header'
import Intro from '../../components/Landing/Intro'
import FirstSection from '../../components/Landing/FirstSection'
import SecondSection from '../../components/Landing/SecondSection'
import GetStarted from '../../components/Landing/GetStarted'
import Footer from '../../components/Landing/Footer'
import MainCard from '../../components/Landing/MainCard'
import './index.styl'

const PLanding = () => {
  return pug`
    Header
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
