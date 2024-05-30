import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'
const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Mr. GOWTHAM S</h1>
            <p>Certified FullStack Developer</p>
            <a href="http://www.google.com">
                <button className='topContent__downloadBtn'>Login</button>
                <Link to='projects' smooth={true} duration={500}>
                <button className='topContent__workBtn'>Sign-Up</button>

                </Link>
            </a>
        </div>
  
    </div>
  )
}

export default TopContent;