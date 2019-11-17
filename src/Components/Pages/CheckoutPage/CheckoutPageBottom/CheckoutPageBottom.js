import React from 'react'
const CheckoutPageBottom= ({subTotal, itemsCount} )=>{
    return (
        <div>
            <div className="order-summary-heading">
                <h2>Order Summary</h2>
            </div>
            <div className="order-summary-box">
                <div className="container order-summary-text">
                        <div>                     
                            <span><strong>Subtotal</strong>({itemsCount} item)</span>
                            <span><strong>${subTotal}</strong></span>                            
                        </div>
                        <div>                     
                            <span><strong>Shipping</strong>:Economy</span>
                            <span><strong>-</strong></span>                            
                        </div> 
                        <div>                     
                            <span><strong>Estimated Tax</strong></span>
                            <span><strong>-</strong></span>                            
                        </div>   
                        <div>                     
                            <span><strong>Total</strong></span>
                            <span><strong>${subTotal}</strong></span>                            
                        </div>                

                </div>

                <div className=" order-summary-action">
                    put the Button component here

                    <p>By placing your order, you agree to Tillys privacy policy and terms of use.</p>
                </div>   
            </div>      
        
        </div>
    )
}

export default CheckoutPageBottom