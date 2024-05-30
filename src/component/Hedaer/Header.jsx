import React from 'react'
import {Link} from "react-scroll";
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>CINI<span>CACHE</span></h1>
        </div>
        <div className='header__right'>
        <Link to='about' smooth={true} duration={500}>
        <h4>Home</h4>
        </Link>
        <Link to='Skills' smooth={true} duration={500}>
        <h4>Movies</h4>
        </Link>
        <Link to='Project' smooth={true} duration={500}>
        <h4>Top Rated</h4>
        </Link>
        <Link to='exp' smooth={true} duration={500}>
        <h4>Discussion</h4>
        </Link>
        <Link to='Contact' smooth={true} duration={500}>
        <h4>Upcoming</h4>
        </Link>
        <h4 className='header__rightbtn'>SUBSCRIBE!</h4>

        </div>
    </div>
  )
}

export default Header;