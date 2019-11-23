import React from 'react'
import Button from '../../../Button/Button'
import  MiniCartBody from './MinicartBody/MinicartBody'

import './MiniCart.scss'
const MiniCart = (
    {   className, ordersInBag, itemAddedInbag, 
        subTotal,  quantityShown, 
        handleMouseEventForProCeedToCheckOut,
        mouseIn,
        mouseOut
    
    }
    
    
    
    )=>{
    return(
        <div 
        className={`mini-cart ${className} ${itemAddedInbag? 'active':''}`}
        onMouseEnter ={mouseIn}
        onMouseLeave = {mouseOut}
        >
                <div className="mini-cart-header">
                    <h3>Items in your bag</h3>
                </div>

                <div className="mini-cart-body-wrapper">

               
               {ordersInBag.map((item,i)=>{
                   return <MiniCartBody key = {i} {...item}/>
               })} 
            
                </div>

  
            
                <div className="mini-cart-bottom">
                    <h3>
                         <span>Subtotal ({quantityShown} item)</span>

                     <span>${subTotal}</span>

                    </h3>
                    <h5>Recive Free Shipping</h5>
                    <Button 
                    
                    handleMouseEventForProCeedToCheckOut= {handleMouseEventForProCeedToCheckOut}
                    className="checkout" 
                    routeName='/checkout'>PROCEED TO CHECKOUT </Button>

                </div>

    </div>
      
    )
}



export default MiniCart 