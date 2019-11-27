import React from 'react'

import './NavBar.scss'

import MiddleBar from './MiddleBar/MiddleBar'
import BottomBar from './BottomBar/BottomBar'
const NavBar = ()=>{
    return (
        <div className= 'main-navbar '>

                        
          <div className = 'top-bar col-12'>Top Bar Black</div>

        <MiddleBar />

        <BottomBar />
           
      
         <div className = "spacer"></div>                                          

       


        </div>
        

    )
}

export default NavBar



            