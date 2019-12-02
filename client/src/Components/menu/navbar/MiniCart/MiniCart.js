import React, {useEffect,useState} from 'react'
import Button from '../../../Button/Button'
import  MiniCartBody from './MinicartBody/MinicartBody'
 import MinicartBodyWrapper from './MiniCartBodyWrapper/MinicartBodyWrapper'
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
                    <h3 className="px-3 " style={{textAlign:'center'}}><strong>ITEMS ADDED IN YOUR BAG</strong></h3>
                </div>

              
                <MinicartBodyWrapper ordersInBag = {ordersInBag} />
  
            
                <div className="mini-cart-bottom">
                    <h3 className="row justify-content-between px-5">
                    <span><strong>Subtotal ({quantityShown} item)</strong></span>

                     <span ><strong>${subTotal}</strong></span>

                    </h3>
                    <h5>Recieve Free Shipping</h5>
                    <Button 
                    
                    handleMouseEventForProCeedToCheckOut= {handleMouseEventForProCeedToCheckOut}
                    className="checkout" 
                    routeName='/checkout'>PROCEED TO CHECKOUT </Button>

                </div>

    </div>
      
    )
}



export default MiniCart 