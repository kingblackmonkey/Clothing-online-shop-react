import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import './CheckoutPageBottom.scss'
const CheckoutPageBottom= ({subTotal, itemsCount, isFixedToViewPort, isFixedToParent} )=>{

    
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
                console.log(res)
        }).catch((err)=>{
              console.log('wrong')  
        }) 
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
                                name={`Clothing Shop Co. `}
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
              

                    <p style={ {fontSize:'12px', padding: '3rem 8rem', textAlign:'center'}}>By placing your order, you agree to Clothing Shop.Co privacy policy and terms of use.</p>
                </div>   
            </div>      
        
        </div>
    )
}

export default CheckoutPageBottom