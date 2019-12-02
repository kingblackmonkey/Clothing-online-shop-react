import React, {useRef, useEffect} from 'react'
import MiniCartBody from '../MinicartBody/MinicartBody'
const MinicartBodyWrapper = ({ordersInBag})=>{
    const parantE = useRef(null);

   
  useEffect(()=>{
//   console.log(parantE)
parantE.current.scrollTop = 0;
  })
    return(

        <div ref={parantE} className="mini-cart-body-wrapper">

               
        {
        
       ordersInBag.map((item,i)=>{
            return <MiniCartBody key = {i} {...item}/>
        }).reverse()
        
        } 
     
         </div>
    )

    
}

export default MinicartBodyWrapper