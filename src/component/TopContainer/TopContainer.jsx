import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent';
import "../TopContainer/TopContainer.css"


const TopContainer = ({setTab}) => {
  return (
   <Element name="about" className='topContainer'>
    <TopContent setTab={setTab}></TopContent>
   </Element>
  )
}

export default TopContainer;