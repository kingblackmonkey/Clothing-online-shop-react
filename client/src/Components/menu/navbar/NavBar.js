import React from 'react'

import './NavBar.scss'
import TopBar from './TopBar/TopBar'
import MiddleBar from './MiddleBar/MiddleBar'
import BottomBar from './BottomBar/BottomBar'
const NavBar = ()=>{
    return (
        <div className= 'main-navbar '>

                        
      <TopBar />

        <MiddleBar />

        <BottomBar />
           
      
         <div className = "spacer"></div>                                          

       


        </div>
        

    )
}

export default NavBar



            