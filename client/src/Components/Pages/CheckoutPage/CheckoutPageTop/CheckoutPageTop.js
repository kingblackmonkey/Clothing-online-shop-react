import React from 'react'
import CheckoutPageTopBody from './CheckoutPageTopBody/CheckoutPageTopBody'
import {history} from '../../../../index'
import {useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './CheckoutPageTop.scss'
const CheckoutPageTop = ({ordersInBag, itemsCount,   subTotal})=>{
    

    useEffect(() => {
      
      if(!itemsCount) history.push('/')
     
      });

     const  onToken = (token,address) => {
        console.log(token)
        console.log(address)

      }
  
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
                        <StripeCheckout
                                name={`Clothing Shop Co. `}
                                token={onToken}
                                stripeKey="pk_test_Uw2pk4Pv5Y1HY141M6ajikcs005GSImQzB"
                                currency="USD"
                                label={`PAY WITH CARD`}
                                amount={subTotal*100}
                                shippingAddress={true}
                                billingAddress = {true}
                                ComponentClass="custom-stripe-style"

                        />
                    </div>
                </div>
                {ordersInBag.map((item,i)=>  <CheckoutPageTopBody  key = {i} {...item}  /> )}
               
        </div>
    )
}





export default CheckoutPageTop 