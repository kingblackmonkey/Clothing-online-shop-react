import React from 'react' 
import { NavLink } from 'react-router-dom';
import MiniCart from '../MiniCart/MiniCart'
import { ReactComponent as BagSvg } from '../../shoppingBag/shoppingBag.svg';
import {connect} from 'react-redux'
import {authenticate, signOut  } from '../../../../firebase/authenticate'
class MiddleBar extends React.Component{
    
    state= {
        minicartActive: '',
      
    }

  handleSignIn = ()=>{
        authenticate();
  }

  handleSignOut = ()=>{
        signOut();
  }

    handleMouseEvent = ()=>{
            this.setState(({minicartActive})=>(
                {
                    minicartActive: minicartActive ? "": 'active'
                }
                
                ))
    }
    
    render(){
        return(

            
          <div className= 'middle-bar fluid '>
                <div className="row ">
                    <div className="col-sm-12 col-md-11 col-lg-6 text-sm-center text-lg-left logo px-5">
                    <NavLink to="/" ><h1 className = 'pl-sm-7'>Your Brand Here</h1></NavLink>  
                    </div>
                    
                    <div className = ' col-sm-12 col-md-1 col-lg-6 row justify-content-end px-5 align-items-center'>
                        <span 
                        style={{cursor:'pointer'}} 
                        className = 'sign-in pr-3'
                        onClick = {this.handleSignIn}
                        >
                            
                            Sign In
                            
                        </span>

                        <span 
                        style={{cursor:'pointer'}} 
                        className = 'sign-out pr-3'
                        onClick = {this.handleSignOut}
                        >
                            
                            Sign Out
                            
                        </span>

                        <span 
                        className= "bag-icon-container"
                        onClick ={this.handleMouseEvent}
                       
                        
                        >
                            <BagSvg  className="bag-icon"/>
                           <span className= "bag-number">{this.props.quantityShown}</span>
                        </span>
                    
                    </div>
                </div>
                
                    <MiniCart 
                    className={this.state.minicartActive}
                    ordersInBag = {this.props.ordersInBag}
                    itemAddedInbag = {this.props.itemAddedInbag}
                    subTotal = {this.props.subTotal}
                    quantityShown = {this.props.quantityShown}
                    />
                    
            </div>
         
        )
    }
}

const mapStateToProps = ({ordersInBag,itemAddedInbag})=>{
    return{
        ordersInBag,
        itemAddedInbag,
        quantityShown: ordersInBag.reduce((acc, cur)=>{
            return acc + cur.quantity
        }, 0),
        subTotal: ordersInBag.reduce((acc, cur)=>{
            return acc + cur.price
        }, 0)
    }
}

export default connect(mapStateToProps)(MiddleBar) 