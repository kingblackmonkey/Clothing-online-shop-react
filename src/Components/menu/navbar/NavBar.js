import React from 'react'
import { NavLink } from 'react-router-dom';
import{Navbar, Nav} from 'react-bootstrap'; import './NavBar.scss'

import MiddleBar from './MiddleBar/MiddleBar'
const NavBar = ()=>{
    return (
        <div className= 'main-navbar '>

                        
          <div className = 'top-bar col-12'>Top Bar Black</div>

        <MiddleBar />

            <Navbar className= 'bottom-bar' expand="lg">
                           
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse>
                               <Nav className="ml-auto">
                                   <li className ="px-4 mt-sm-3 mt-lg-0"> 
                                       <NavLink   to="/shop/men_t_shirt" >Men Shirt</NavLink>
                                   </li>
                                   <li className="px-4 mt-sm-3 mt-lg-0"> 
                                       <NavLink to="/addIncome" >Men Watch </NavLink>
                                   </li>
                                   <li className="px-4 mt-sm-3 mt-lg-0"> 
                                       <NavLink to="/addIncome" >Women Shirt </NavLink>
                                   </li>
                                   <li className="px-4 mt-sm-3 mt-lg-0"> 
                                       <NavLink to="/addIncome" >Women HandBags </NavLink>
                                   </li>
                               </Nav>
                           
                           </Navbar.Collapse>          

                           
                       </Navbar>
      
         <div className = "spacer"></div>                                          

       


        </div>
        

    )
}

export default NavBar



            