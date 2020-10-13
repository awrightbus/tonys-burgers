import React from 'react'
import './MobileNavItem.css'
import {data} from './MobileNavItemData.js'


function MobileNavItem() {
    return (
        <div className='mobile-nav-item'>
            
            {data.map((name, id) => {
                
                return(
                    <div className='navItems'>
                        <ul>
                            <li key={id.id}>
                                {data.logo}
                                <span>{name.name}</span>
                            </li>
                        </ul>
                    </div>
                )
                
            })}
            
            
        </div>
    )
}

export default MobileNavItem
