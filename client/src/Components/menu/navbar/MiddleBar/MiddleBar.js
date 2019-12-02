import React from 'react' 
import { NavLink } from 'react-router-dom';
import MiniCart from '../MiniCart/MiniCart'
import { ReactComponent as BagSvg } from '../../shoppingBag/shoppingBag.svg';
import {connect} from 'react-redux'
import {authenticate, signOut  } from '../../../../firebase/authenticate'
import {history } from "../../../../index";
import Drawer from './Drawer/Drawer'
import DrawerBackground from './DrawerBackground/DrawerBackground'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MiddleBar.scss'
class MiddleBar extends React.Component{
    
    state= {
        minicartActive: '',
        mobileMenu: false,
        
    }

  handleSignIn = ()=>{
        authenticate();
  }

  handleSignOut = ()=>{
        signOut();
      
        history.push("/");
  }

    handleMouseEvent = ()=>{
            this.setState(({minicartActive})=>(
                {
                    minicartActive: minicartActive ? "": 'active'
                }
                
                ))
    }

    handleMouseEventForProCeedToCheckOut = ()=>{
        
        this.setState(()=>({ minicartActive: ''}))
    }

    handleMouseIn = ()=>{
        this.setState(()=>({ minicartActive: 'active'}))
    }

    handleMouseOut = ()=>{
        this.setState(()=>({ minicartActive: ''}))
    }

    handleOpenMobileMenu = ()=>{
             this.setState(({ mobileMenu})=>({ mobileMenu: !mobileMenu}))
            
           ;
       document.body.classList.value ?    document.body.classList.remove('open'): document.body.classList.add('open')
    }

 
  
    render(){
        return(

            
          <div className= 'middle-bar fluid 'style={{position:'relative'}}>
                <div className="row ">
                    <div className="col-sm-12 col-lg-6 text-sm-center pl-5 logo  row justify-content-between">
                        <div className="hamburger ml-3" onClick={this.handleOpenMobileMenu}><FontAwesomeIcon icon={ faBars} /></div> 
                     <div    className=" ml-lg-5">
                              <NavLink to="/"
                                      style={{
                                        display:'inline-block',width:'100%', height:'100%', 
                                        backgroundImage:'url(https://i.ibb.co/VtMJxhY/imageedit-6-8339776761.png)',
                                        backgroundSize:'cover',
                                        backgroundPosition:'center',
                                        backgroundRepeat:'no-repeat',
                                        width: '300px',
                                        height:'60px',
                                        
                                        
                                        top:'10px'
                                      }}
                              >
                              


                          
                          </NavLink>  
                     </div>
                 
                      <span 
                        className= "bag-icon-container bag-icon-container-small-screen"
                        onClick ={this.handleMouseEvent}
                       
                        
                        >
                            <BagSvg  className="bag-icon bag-icon-small-screen"/>
                           <span className= "bag-number">{this.props.quantityShown}</span>
                        </span>
                    </div>

                    
                    <div className = 'sign-in-big-sreen col-sm-12  col-lg-6 row justify-content-end px-5 align-items-center'>
                      
                        <span className="pr-3">Hello <strong style={{textTransform:'uppercase'}}>{this.props.name}!</strong></span>
                       

                        {
                            this.props.name === 'guest'&& <span 
                            style={{cursor:'pointer'}} 
                            className = 'sign-in pr-3 ml-auto d-inline-block '
                            onClick = {this.handleSignIn}
                            >
                                
                                Sign In
                                
                            </span>
                        }

                        {
                             this.props.name !== 'guest'&&  <span 
                        style={{cursor:'pointer'}} 
                        className = 'sign-out pr-3'
                        onClick = {this.handleSignOut}
                        >
                            
                            Sign Out
                            
                        </span>
                        }

                      

                        <span 
                        className= "bag-icon-container"
                        onClick ={this.handleMouseEvent}
                       
                        
                        >
                            <BagSvg  className="bag-icon"/>
                           <span className= "bag-number">{this.props.quantityShown}</span>
                        </span>
                    
                    </div>
                </div>

                {

                 <Drawer 
                    handleOpenMobileMenu={this.handleOpenMobileMenu}
                    mobileMenu={ this.state.mobileMenu}
                    /> 
                }
                { 
                this.state.mobileMenu && <DrawerBackground 
                mobileMenu={ this.state.mobileMenu}
                /> 
                
                }
                   
                
   
                
                    <MiniCart 
                    className={this.state.minicartActive}
                    ordersInBag = {this.props.ordersInBag.length > 0? this.props.ordersInBag : this.props.odersInBagForSignedInUser}
                    itemAddedInbag = {this.props.itemAddedInbag}
                    subTotal = {this.props.subTotal}
                    quantityShown = {this.props.quantityShown}
                    handleMouseEventForProCeedToCheckOut ={this.handleMouseEventForProCeedToCheckOut}
                    mouseIn= {this.handleMouseIn}
                    mouseOut= {this.handleMouseOut}
                    
                    />
                    
            </div>
         
        )
    }
}

const mapStateToProps = ({ordersInBag,itemAddedInbag,odersInBagForSignedInUser,user})=>{
 

    return{
        ordersInBag ,
        odersInBagForSignedInUser,
        itemAddedInbag,
        quantityShown: ordersInBag.length > 0 ? ordersInBag.reduce((acc, cur)=>{
            return acc + cur.quantity
        }, 0): odersInBagForSignedInUser.reduce((acc, cur)=>{
            return acc + cur.quantity
        }, 0)
        
        ,
        subTotal:  ordersInBag.length > 0 ?  ordersInBag.reduce((acc, cur)=>{
            return acc + cur.price
        }, 0) : odersInBagForSignedInUser.reduce((acc, cur)=>{
            return acc + cur.price
        }, 0),
        name: user.name
    }
}

export default connect(mapStateToProps)(MiddleBar) 