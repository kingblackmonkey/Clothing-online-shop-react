import React from 'react'
import CheckoutPageTopBody from './CheckoutPageTopBody/CheckoutPageTopBody'
const CheckoutPageTop = ({ordersInBag, itemsCount})=>{
    return(
        <div >
                <div className="checkout-top-header">
                    <div className="no-vert-padding">
                        <h2>Shopping Bag
                        <span className="font-normal-weight desktop-only">

                        ({itemsCount} Item)

                        </span>
                        </h2>
                    </div>
                    <div>
                        put the button component here
                    </div>
                </div>
                {ordersInBag.map((item,i)=>  <CheckoutPageTopBody  key = {i} {...item}/> )}
               
        </div>
    )
}





export default CheckoutPageTop 