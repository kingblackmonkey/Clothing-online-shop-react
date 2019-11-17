import React from 'react'
import{Link} from 'react-router-dom'
import "./Button.scss"
const Button = ({children, className,disabled, type, routeName})=>{
 return (  

    
className ===  "add-to-bag" ?   
 
 <button type={type} className={`button ${className? className: ''}` }  disabled={disabled}>
{children}
</button>   :   

<Link className={`button ${className}`} to={`${routeName}`}>{children}</Link> 

    
   
 )
}

export default Button


