import React from 'react'
import Select from '../../../../../Select/Select'
import Button from '../../../../../Button/Button'
import {connect} from 'react-redux'
import {addOrderToBagActionThunk} from '../../../../../../reduxStore/actions/ordersInBag'
import addUpOrders from '../../../../../../reduxStore/utilityFunctions/addUpOrders'
import  {addedItemInBag, defaultAddedItemInBag} from '../../../../../../reduxStore/actions/itemAddedInbag'
import {updateOrderForGuest, updateOrderForSignedInUserThunk } from '../../../../../../reduxStore/actions/updateOrderInbag'

import './DetailItemFormBody.scss'
 class  DetailItemFormBody extends React.Component{
  
    state = {
        selectedSize: 'Size',
        selectedQuanity: this.props.modalQuantity? this.props.modalQuantity: 1,
       oldSizeFromModal: this.props.modal? this.props.oldSize : '',
        
    }
  
 
   handelChange= (e, name)=>{
    const value = e.target.value;
    this.setState(()=>{
        return name === 'Size' ? {
            selectedSize: value
        } : {
            selectedQuanity:value
        }
    });

 

}


toggleSelectedSize = (size)=>{

    if(size !== 'Size'){
           this.setState(()=>{
     return{
         selectedSize: size
     }
 })
    }

}

   handleSubmit = (e)=>{
       e.preventDefault();
       const order =  {
        id: this.props.id,
        imageUrl: this.props.imageUrl,
        name:  this.props.name,
        price:  this.props.basePrice * parseInt(this.state.selectedQuanity),
        size: this.state.selectedSize,
        quantity: parseInt(this.state.selectedQuanity),
        basePrice:this.props.basePrice
    }
          this.props.addOrderToBagActionThunk(order )
 
  
        this.setState(()=>({ selectedSize: 'Size', selectedQuanity: 1,}))

        this.props.addedItemInBag();
        setTimeout(()=>{ this.props.defaultAddedItemInBag();}, 1500);
   }

   handleSubmitForModalUpdate = (e)=>{
    e.preventDefault();
    const order =  {
        id: this.props.id,
        oldSize: this.state.oldSizeFromModal,
        size: this.state.selectedSize,
        quantity: parseInt(this.state.selectedQuanity), 
        price: parseInt(this.state.selectedQuanity) * this.props.basePrice
    }   

   this.props.itemCount === 0 ? this.props.updateOrderForSignedInUserThunk(order): this.props.updateOrderForGuest(order);
    this.props.closeModal()

}
   
  
    render(){

    return (
        
        <form className="detail-item-body" onSubmit={ this.props.modal?this.handleSubmitForModalUpdate :this.handleSubmit}>
                <h3 className = "detail-item-price">${this.props.price}</h3>

                <div className="detail-item-color-text">
                        color: Same As Picture
                </div>

                <div className="row align-items-baseline detail-item-size-container no-gutters">
                    <div className="col-2">
                        <span className="detail-item-size-text">Size:</span>
                    </div>
                    <div className="col-8  col-lg-6 ">
                        <ul className="detail-item-size-options row no-gutters ">
                            <li className="detail-item-size-option col-4">
                                <span 
                                onClick={()=>{
                                        this.toggleSelectedSize('small')
                                }} 
                                className = {this.state.selectedSize === "small"? 'active':''}
                                >S</span>
                            </li>
                            <li className="detail-item-size-option col-4 ">
                                <span 
                                className = {this.state.selectedSize === "medium"? 'active':''}
                                onClick={()=>{
                                   this.toggleSelectedSize('medium')
                                }}
                                >M</span>
                            </li>
                            <li className="detail-item-size-option col-4">
                                <span 
                                className = {this.state.selectedSize === "large"? 'active':''}
                                onClick={()=>{
                                    this.toggleSelectedSize('large')
                                }}
                                >L</span>
                            </li>
                        </ul>
                    </div>           
            
                </div>
                {
                    this.props.modal? '':<div>
                    <span className="size-chart"> Size Chart</span>  
                </div>  
                }                    
                

                <div className="quantity-text-container" >
                    <span className="quantity-text">Qty:</span>
                    <Select 
                    value = {[1,2,3,4,5,6,7,8]} 
                    name= 'Quantity' 
                    className="quantity"
                    selectedQuanity= {this.state.selectedQuanity}
                    handelChange={this.handelChange}
                    />
                </div>
                
                { this.state.selectedSize === 'Size' ? this.props.modal ?  ''  : <div>
                                            <p className="note pt-3">Select Size, then click ADD TO BAG.</p>
                                        </div>  : ''
                
                                            
                        }

                <Button 
                
                
                type="submit" className= 'add-to-bag' 
                disabled={this.state.selectedSize==='Size'?true:false}
            
                >
                  {this.props.modal?  'UPDATE' :'ADD TO BAG'}
                    </Button>
     
         

    </form>
    )

}
   
   

    
}

const mapStateToProps = (state)=>{
    return {
        itemCount: state.ordersInBag.length
    }
}


const mapDispatchToProps = {
    addOrderToBagActionThunk,
    addedItemInBag,
    defaultAddedItemInBag,
    updateOrderForGuest,    
    updateOrderForSignedInUserThunk
}

export default  connect( mapStateToProps, mapDispatchToProps)( DetailItemFormBody)  