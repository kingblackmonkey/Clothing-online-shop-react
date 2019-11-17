import React from 'react'
import {Link} from 'react-router-dom'
import './CollectionItem.scss'
const CollectionItem = ({id, imageUrl, name, price,route})=>{

    return(
        <div className="col-6 col-md-4 ">
           <div className="p-4 p-sm-5 collection-item">
                 <Link className="collection-item-img" to={`/shop/${route}/${id}`}   > 
                <img  src={imageUrl} className="img-fluid"/>
                </Link>
                <h4>{name}</h4>
                <h5>${price}</h5>
                <a>Detail</a>
           </div>
      
           
        </div>
        
    )
}
export default CollectionItem