import React from 'react'
import {Link} from 'react-router-dom'
import './CollectionItem.scss'
const CollectionItem = ({id, imageUrl, name, price,route, handleImageChange})=>{

    return(
        <div className="col-6 col-md-4 ">
           <div className="p-4 p-sm-5 collection-item">
                 <Link className="collection-item-img" to={`/shop/${route}/${id}`}   > 
                <img 
                alt="visual-item" src={imageUrl}
                 className="img-fluid"
                onLoad={handleImageChange}
                 />
                </Link>
                <h4 className="pt-3" style={{fontSize:'12px' ,letterSpacing:'.5px',fontWeight:'500', fontFamily:'Roboto", sans-serif'}}> {name}</h4>
                <h5 style={{letterSpacing:'1px', fontWeight:'500', fontFamily:'Roboto", sans-serif'}}>${price}</h5>
                
           </div>
      
           
        </div>
        
    )
}
export default CollectionItem