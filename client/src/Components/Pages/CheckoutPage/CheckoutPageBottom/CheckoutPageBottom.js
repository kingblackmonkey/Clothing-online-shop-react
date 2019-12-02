import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { store } from 'react-notifications-component';
import './CheckoutPageBottom.scss'
import {history} from '../../../../index'
import {signOut} from '../../../../firebase/authenticate'
const CheckoutPageBottom= ({subTotal, itemsCount, isFixedToViewPort, isFixedToParent,  ordersInBag,  defaultOrderInBag} )=>{

    const sendEmail = (res)=>{
        axios({
            url: 'sendEmail',
            method: 'post',
            data:{
               email: res.data.success.receipt_email,
               name: res.data.success.billing_details.name, 
               orderNumber: res.data.success.customer,
               ordersInBag ,
               subTotal
            }
        }).then((res)=>{
            //    console.log(res)

        }).catch((err)=>{
             console.log(err)  
        }) 
      }
    
    const  onToken = (token) => {
        // console.log(token)
        // console.log(address)

        axios({
            url: '/payment',
            method: 'post',
            data:{
                amount: subTotal * 100,
                token    
            }
        }).then((res)=>{
                // console.log(res)
                sendEmail(res)

        }).catch((err)=>{
              console.log('wrong')  
        }) 

// show notification
        store.addNotification({
            title: "Horray You Placed an Order!",
            message: "Check Your Email for Order Confirmation",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 8000,
              onScreen: true
            }
          });
// clear the cart in redux
defaultOrderInBag()
// sign out
signOut()
// go back to home page
history.push('/')

}
    return (
        <div 
        className= {
            `${isFixedToViewPort ? isFixedToParent?
            'order-summary-container fixed-to-parent':
            'order-summary-container fixed-to-viewport ':
            'order-summary-container' }`
            
            
            }  >
       
       
            <div className="order-summary-heading">
                <h2><strong>Order Summary</strong> </h2>
            </div>
            <div className="order-summary-box">
                <div className="container order-summary-text">
                        <div className='row justify-content-between mx-1'>                     
                            <span><strong>Subtotal</strong>({itemsCount} item)</span>
                            <span><strong>${subTotal}</strong></span>                            
                        </div>
                        <div  className='row justify-content-between mx-1'>                     
                            <span><strong>Shipping</strong>:Economy</span>
                            <span><strong>-</strong></span>                            
                        </div> 
                        <div style={{borderBottom: '1px solid #333'}}  className='row justify-content-between mx-1'>                     
                            <span><strong>Estimated Tax</strong></span>
                            <span><strong>-</strong></span>                            
                        </div>   
                        <div  className='row justify-content-between mx-1'>                     
                            <span><strong>Total</strong></span>
                            <span><strong>${subTotal}</strong></span>                            
                        </div>                

                </div>

                <div className=" order-summary-action">
                    <div className="mx-5 mx-sm-4 mx-xl-5">
                                <StripeCheckout
                                name={`Clothing Shop Co.`}
                                token={onToken}
                                stripeKey="pk_test_Uw2pk4Pv5Y1HY141M6ajikcs005GSImQzB"
                                currency="USD"
                                label={`PAY WITH CARD`}
                                amount={subTotal*100}
                                shippingAddress={true}
                                billingAddress = {true}
                                ComponentClass="custom-stripe-style"

                        ></StripeCheckout>
                    </div>
              

                    <p style={ {fontSize:'12px', padding: '3rem 8rem', textAlign:'center', color:'#1e363c'}}><strong>USE CARD NUMBER: <i>4242 4242 4242 4242 </i> --EXPIRATION DATE: <i>12/50</i> --CVC: <i>123</i> TO MAKE TESTING PAYMENT--- USE YOUR REAL EMAIL TO GET ORDER CONFIRMATION</strong></p>
                </div>   
            </div>      
        
        </div>
    )
}

export default CheckoutPageBottom