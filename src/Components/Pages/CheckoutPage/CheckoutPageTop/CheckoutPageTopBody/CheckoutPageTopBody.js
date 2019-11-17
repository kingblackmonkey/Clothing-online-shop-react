import React from 'react'
import Select from '../../../../Select/Select'
class CheckoutPageTopBody extends React.Component{
    state= {
        selectedQuantity : this.props.quantity
    }

    handelChange= (e)=>{
        const value = e.target.value;
        this.setState(()=> ({  selectedQuantity:value }));
    }
    render(){

        return (
            <div className="checkout-top-body">
                <div className="row">
                       <div className="col-3">
                           <div className="checkout-top-body-picture">
                               <img  className="img-fluid " src={this.props.imageUrl}></img>
                           </div>  
                       </div>
        
                       <div className="row col-9">
                            <div className="col-sm-12 col-md-6">                                            
                                   <div className="checkout-top-body-text">
        
                                           <div className="product-list-item">
                                               <div className="name">
                                                       <a className="product-name" >{this.props.name}</a>
                                           </div>
                                             
                                               <div className="sku">
                                                   <span className="label">Item#  </span>
                                                   <span className="value">{this.props.id}</span>
                                               </div>
                                               <div className="attribute" data-attribute="size">
                                                   <span className="label">Size:</span>
                                                   <span className="value">  {this.props.size} </span>
                                               </div>
                                               <div className="attribute" data-attribute="color">
                                                   <span className="label">Color:</span>
                                                   <span className="value"> Same as Picture</span>
                                               </div>
        
                                           </div>
                                   </div>  
                            </div>
                            <div className="col-sm-12 col-md-6 ">
                                <div className="checkout-top-body-number row">
                                    <div className="col-6 order-md-12">
                                        
                                        <div className="item-total mobile-only">
        
                                            <div className="price-total ">
                                                <span className="price-bold">${this.props.price}</span>
                                            </div>
                                          <span  className="checkout-top-body-number-edit">Edit</span> 
                                          <span className="checkout-top-body-number-remove">Remove</span>
                                         
                                        </div>
                                    </div>
                                    <div className="col-6 order-md-1">
                                        <span className="checkout-top-body-number-quantity-text">Qty</span> <Select 
                                        name={'Quantity'}
                                        className="checkout-top-body-number-quantity"
                                        value={[1,2,3,4,5,6,7,8,9,10]}
                                        selectedQuanity = {this.state.selectedQuantity}
                                        handelChange={this.handelChange}
                                        /> 
                                    </div>
                                </div>
                           
        
                            </div>
        
                       </div>
                </div>              
           </div>
            )


    }
}

export default CheckoutPageTopBody