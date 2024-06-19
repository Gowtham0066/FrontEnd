import React from 'react'
import Header from './component/Hedaer/Header'
import TopContainer from './component/TopContainer/TopContainer'

const WelcomePage = ({setTab}) => {
  
  return (
    <div>
        <Header setTab={setTab}></Header>
        <TopContainer setTab={setTab}></TopContainer>
    </div>
  )
}

export default WelcomePage