import React from 'react'
import CheckoutPageTop  from './CheckoutPageTop/CheckoutPageTop'
import CheckoutPageBottom from './CheckoutPageBottom/CheckoutPageBottom'
import {connect} from 'react-redux'
const CheckoutPage = ({ordersInBag, subTotal, itemsCount, odersInBagForSignedInUser })=>{
    return(
        <div className = "container">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                          <CheckoutPageTop 
                           ordersInBag = {ordersInBag.length > 0 ? ordersInBag: odersInBagForSignedInUser} 
                           itemsCount= {itemsCount}
                           subTotal = {subTotal}
                           />
                    </div>
                  
                    <div className="col-sm-12 col-md-4" >
                        <CheckoutPageBottom  
                           subTotal = {subTotal}
                           itemsCount= {itemsCount}
                        />
                    </div>
                </div>
        </div>
    )
}
const mapStateToProps = ({ordersInBag, odersInBagForSignedInUser})=>{
    return {
        ordersInBag,
        odersInBagForSignedInUser,
        subTotal:  ordersInBag.length > 0 ?  ordersInBag.reduce((acc, cur)=>{
            return acc + cur.price
        }, 0) : odersInBagForSignedInUser.reduce((acc, cur)=>{
            return acc + cur.price
        }, 0),
        itemsCount:  ordersInBag.length > 0 ? ordersInBag.reduce((acc, cur)=>{
            return acc + cur.quantity
        }, 0): odersInBagForSignedInUser.reduce((acc, cur)=>{
            return acc + cur.quantity
        }, 0)
    }
}

export default connect(mapStateToProps)(CheckoutPage) 







