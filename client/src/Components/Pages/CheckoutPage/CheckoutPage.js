import React, {useState,  useEffect, useRef } from 'react'; 
import CheckoutPageTop  from './CheckoutPageTop/CheckoutPageTop'
import CheckoutPageBottom from './CheckoutPageBottom/CheckoutPageBottom'
import {connect} from 'react-redux'
import {defaultOrderInBagForGuest,  defaultOrderInBagForSignInUser } from '../../../reduxStore/actions/ordersInBag'
const CheckoutPage = ({ordersInBag, subTotal, itemsCount, odersInBagForSignedInUser, defaultOrderInBagForGuest,  defaultOrderInBagForSignInUser })=>{
    
    const parentR = useRef(null);
    
    const [isFixedToViewPort, setisFixedToViewPort] = useState(false);
    useEffect(() => {
       
            if(ordersInBag.length > 2|| odersInBagForSignedInUser.length > 2){
                setisFixedToViewPort(true)
            
            }else{
                setisFixedToViewPort(false)
            }
      }, [ordersInBag.length, odersInBagForSignedInUser.length] );

      const [isFixedToParent, setisFixedToParent] = useState(false);

      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const myEfficientFn = debounce(function() {
      
        if(window.scrollY > (parentR.current.getBoundingClientRect().height + 83)/4 ){
        
            setisFixedToParent(true)
        }else{
            setisFixedToParent(false)
        }
     


    }, 500);

      useEffect(() => {
       
        if(ordersInBag.length > 2 || odersInBagForSignedInUser.length > 2){
               
            window.addEventListener('scroll', myEfficientFn) ;         
            return ()=>{
               window.removeEventListener('scroll', myEfficientFn)
              
            }
        }
          
           
        });

    return(
        <div ref={parentR}  style={{position:"relative"}} className = "container order-summary-wrapper mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-8">
                          <CheckoutPageTop 
                           ordersInBag = {ordersInBag.length > 0 ? ordersInBag: odersInBagForSignedInUser} 
                           itemsCount= {itemsCount}
                           subTotal = {subTotal}
                           defaultOrderInBag = {ordersInBag.length > 0 ? defaultOrderInBagForGuest:  defaultOrderInBagForSignInUser}
                           
                         />
                    </div>
                  
                    <div className="col-sm-12 col-md-5 col-lg-4" >
                        <CheckoutPageBottom  
                           subTotal = {subTotal}
                           itemsCount= {itemsCount}
                           isFixedToViewPort= {isFixedToViewPort}
                           isFixedToParent = {isFixedToParent}
                           ordersInBag = {ordersInBag.length > 0 ? ordersInBag: odersInBagForSignedInUser} 
                           defaultOrderInBag = {ordersInBag.length > 0 ? defaultOrderInBagForGuest:  defaultOrderInBagForSignInUser}
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
const mapDispatchToProps = {
    defaultOrderInBagForGuest,
    defaultOrderInBagForSignInUser
}


export default connect(mapStateToProps, mapDispatchToProps )(CheckoutPage) 







