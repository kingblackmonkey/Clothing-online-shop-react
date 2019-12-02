import React from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {authenticate, signOut} from '../../../../../firebase/authenticate'
import './Drawer.scss'
const Drawer = ({ handleOpenMobileMenu,  mobileMenu, name})=>{
    return (
   
         <div className=  {`${mobileMenu?'drawer-container slide-in' : 'drawer-container'}`}>
                        <div
                         style={{textAlign:'right', fontSize:'3rem'}}
                        
                        >
                            <span 
                            style={{cursor:'pointer'}}
                            onClick={handleOpenMobileMenu}
                            >X</span>
                        </div>

                        <div>
                            Hello {name}!
                        </div>
                   
                        {name === 'guest'&&    <div>
                            <span 
                                    style={{cursor:'pointer'}} 
                                    onClick={()=>{authenticate(); handleOpenMobileMenu()}}
                                
                                    >
                                        
                                        Sign In
                                        
                            </span>

                        </div>
                        
                        
                        
                        }

                        {name!=='guest'&&  <div>
                            <span 
                                    style={{cursor:'pointer'}} 
                                    onClick={()=>{signOut(); handleOpenMobileMenu()}}
                                
                                    >
                                        
                                        Sign Out
                                        
                            </span>
                        </div>
                        
                        }
                    
                      
                        <div>
                        <NavLink 
                        onClick={ handleOpenMobileMenu}
                          to="/shop/men_t_shirt" >Men Shirt</NavLink>
                        </div>
                        <div>
                        <NavLink 
                         onClick={ handleOpenMobileMenu}
                        to="/shop/men_watch" >Men Watch </NavLink>
                        </div>
                        <div>
                        <NavLink 
                         onClick={ handleOpenMobileMenu}
                        to="/shop/women_t_shirt" >Women Shirt </NavLink>
                        </div>
                        <div>
                        <NavLink   
                         onClick={ handleOpenMobileMenu}
                        to="/shop/women_hand_bags" >Women HandBags</NavLink>
                        </div>


             </div>
  
    
    )
}
const mapStateToProps = ({user})=>{
    return{
        name: user.name
    }
}
export default connect(mapStateToProps)(Drawer)  