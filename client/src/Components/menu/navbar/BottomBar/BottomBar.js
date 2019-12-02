import React from 'react'
import { NavLink } from 'react-router-dom';
import{Nav} from 'react-bootstrap'; 
import './BottomBar.scss'
const BottomBar = ()=>{
    return (
        <div className="bottom-bar pb-4 pt-3">
           
            <Nav className="justify-content-center ">
                    <li className ="px-4 mt-sm-3 mt-lg-0"> 
                        <NavLink   to="/shop/men_t_shirt" >Men Shirt</NavLink>
                    </li>
                    <li className="px-4 mt-sm-3 mt-lg-0"> 
                        <NavLink to="/shop/men_watch" >Men Watch </NavLink>
                    </li>
                    <li className="px-4 mt-sm-3 mt-lg-0"> 
                        <NavLink to="/shop/women_t_shirt" >Women Shirt </NavLink>
                    </li>
                    <li className="px-4 mt-sm-3 mt-lg-0"> 
                        <NavLink to="/shop/women_hand_bags" >Women HandBags </NavLink>
                    </li>
            </Nav>
        </div>
    )


}

export default BottomBar