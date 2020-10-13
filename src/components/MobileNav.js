import React from 'react'
import './MobileNav.css'
import MobileNavItem from '../containers/MobileNavItem'

function MobileNav() {
    return (
        <div className='mobileNav'>
            <footer className='mobileNavCont'>
               <MobileNavItem />
            </footer>
        </div>
    )
}

export default MobileNav
