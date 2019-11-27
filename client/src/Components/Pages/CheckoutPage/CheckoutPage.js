import React, {useState,  useEffect } from 'react'; 
import CheckoutPageTop  from './CheckoutPageTop/CheckoutPageTop'
import CheckoutPageBottom from './CheckoutPageBottom/CheckoutPageBottom'
import {connect} from 'react-redux'
const CheckoutPage = ({ordersInBag, subTotal, itemsCount, odersInBagForSignedInUser })=>{
    let parentElement;
   
    const [isFixedToViewPort, setisFixedToViewPort] = useState(false);
    useEffect(() => {
        console.log('use eefect')
            if(ordersInBag.length > 1 ){
                setisFixedToViewPort(true)
            
            }else{
                setisFixedToViewPort(false)
            }
      });

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
      
        if(window.scrollY > (parentElement.getBoundingClientRect().height + 83)/2 ){
            setisFixedToParent(true)
        }else{
            setisFixedToParent(false)
        }
     


    }, 500);

      useEffect(() => {
         parentElement= document.querySelector('.order-summary-wrapper')
        if(ordersInBag.length > 1){

            window.addEventListener('scroll', myEfficientFn) ;         
            return ()=>{
               window.removeEventListener('scroll', myEfficientFn)
            }
        }
          
           
        });

    return(
        <div style={{position:"relative"}} className = "container order-summary-wrapper">
                <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-8">
                          <CheckoutPageTop 
                           ordersInBag = {ordersInBag.length > 0 ? ordersInBag: odersInBagForSignedInUser} 
                           itemsCount= {itemsCount}
                           subTotal = {subTotal}
                           />
                    </div>
                  
                    <div className="col-sm-12 col-md-5 col-lg-4" >
                        <CheckoutPageBottom  
                           subTotal = {subTotal}
                           itemsCount= {itemsCount}
                           isFixedToViewPort= {isFixedToViewPort}
                           isFixedToParent = {isFixedToParent}
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







