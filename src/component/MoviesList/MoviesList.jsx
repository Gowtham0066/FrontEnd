import React from 'react'
import {Element} from 'react-scroll'
import './MoviesList.css'
const MoviesList = () => {
  return (
    <Element id='Skills'>

    <div className='moviesList__container' >
      <div className='moviesList__first'>
        <input type="text" placeholder='search'/>
      </div>
     
    </div></Element>
  )
}

export default MoviesList