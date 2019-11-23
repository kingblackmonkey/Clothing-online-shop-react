import React from 'react'
import{Link} from 'react-router-dom'
import "./Button.scss"
const Button = ({children, className,disabled, type, routeName, handleMouseEventForProCeedToCheckOut })=>{
 return (  

    
className ===  "add-to-bag" ||className ===  "update" ?   
 
 <button
  type={type} className={`button ${className? className: ''}` }  
  disabled={disabled} 
 
  >
{children}
</button>   :   

<Link 
onClick={ 
  handleMouseEventForProCeedToCheckOut ? 
  
  ()=>{
    handleMouseEventForProCeedToCheckOut();
   
  }
  
  
  :()=>{}

}
className={`button ${className}`}
 to={`${routeName}`}>{children}</Link> 

    
   
 )
}

export default Button


