import React from 'react'
import CheckoutPageTopBody from './CheckoutPageTopBody/CheckoutPageTopBody'
import {history} from '../../../../index'
import {useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { store } from 'react-notifications-component';
import axios from 'axios'

import {signOut} from '../../../../firebase/authenticate'
import './CheckoutPageTop.scss'
const CheckoutPageTop = ({ordersInBag, itemsCount,   subTotal, defaultOrderInBag})=>{
    

    useEffect(() => {
      
      if(!itemsCount) history.push('/')
     
      });


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
      

     const  onToken = (token,address) => {
        console.log(token)
        console.log(address)

        axios({
            url: 'payment',
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





  
    return(
        <div  >
                <div className="checkout-top-header">
                    <div className="no-vert-padding">
                        <h2> <strong >Shopping Bag</strong>
                        <span className="font-normal-weight desktop-only">

                        ({itemsCount} Item)

                        </span>
                        </h2>
                    </div>
                    <div>
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
                </div>
                <div  style={{borderBottom: '1px #ccc solid', borderTop:'1px #ccc solid', paddingBottom:'5rem', paddingTop:'2rem'}}>
                       {ordersInBag.map((item,i)=>  <CheckoutPageTopBody  key = {i} {...item}  /> )}
                </div>
             
               
        </div>
    )
}





export default CheckoutPageTop 