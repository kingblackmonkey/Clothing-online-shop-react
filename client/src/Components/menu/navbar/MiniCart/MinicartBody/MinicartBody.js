import React from 'react'

const MiniCartBody = ({name,imageUrl, size, quantity, price})=>{
    return (
        <div className="mini-cart-body">
            <h3 className="mini-cart-body-title">{name} </h3>
            <div className="mini-cart-body-detail row no-gutters align-items-center">
                <div className="col-3 p-3">
                    <img alt="product" className="img-fluid" src={imageUrl}/>
                </div>
                <div className="col-9">
                    <p><strong>Color:</strong> Same As Picture</p>
                     <p><strong>Size:</strong> {size}</p>
                     <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>${price}</strong> </p>
                </div>
            </div>

    </div>

    )
}

export default MiniCartBody