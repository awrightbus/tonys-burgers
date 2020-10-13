import React from 'react'
import Logo from '../images/logo.png'
import './Header.css'


function Header() {
    return (
        <div className='header'>
            
            <nav>
                <img src={Logo} alt='compLogo'  className='logo'/>
                <p className='signup'>Sign In</p>
            </nav>
        </div>
    )
}

export default Header
