import React from 'react'
import './DrawerBackground.scss'
const DrawerBackground = ({ mobileMenu})=>{
    return (
        <div className={`${  mobileMenu?  "drawer-background show" :'drawer-background' }`}>

        </div>
    )
}

export default DrawerBackground