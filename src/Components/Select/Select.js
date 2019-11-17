import React from 'react'
import Option from './Option'

 const Select = ({name,className,selectedSize,selectedQuanity,value,handelChange})=>{


 

        return (
         
                <select 
                     className= {className}
                    name = {name} 
                    value={name === 'Size'? selectedSize: selectedQuanity}
                    onChange={(e)=>{
                        handelChange(e,name)
                        
                    }}
                >
                    {value.map((item,i)=>{
                        return <Option key = {i} value = {item}/>
                    })}
                </select>
     
            
        )
 
}

export default  Select 