import React from 'react'
import Select from '../../../../../Select/Select'
import Button from '../../../../../Button/Button'
import {connect} from 'react-redux'
import {addOrderToBagActionThunk} from '../../../../../../reduxStore/actions/ordersInBag'
import addUpOrders from '../../../../../../reduxStore/utilityFunctions/addUpOrders'
import  {addedItemInBag, defaultAddedItemInBag} from '../../../../../../reduxStore/actions/itemAddedInbag'

import './DetailItemFormBody.scss'
 class  DetailItemFormBody extends React.Component{
  
    state = {
        selectedSize: 'Size',
        selectedQuanity: 1,
    
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
        price:  this.props.price,
        size: this.state.selectedSize,
        quantity: parseInt(this.state.selectedQuanity) 
    }
          this.props.addOrderToBagActionThunk(order )
 
  
        this.setState(()=>({ selectedSize: 'Size', selectedQuanity: 1,}))

        this.props.addedItemInBag();
        setTimeout(()=>{ this.props.defaultAddedItemInBag();}, 3000);
   }
  
    render(){

    return (
        
        <form className="detail-item-body" onSubmit={this.handleSubmit}>
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

                <div>
                    <span className="size-chart"> Size Chart</span>  
                </div>  

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
                
                { this.state.selectedSize === 'Size' ?   <div>
                                            <p className="note pt-3">Select Size, then click ADD TO BAG.</p>
                                        </div> : ''
                        }

                <Button type="submit" className="add-to-bag"  disabled={this.state.selectedSize==='Size'?true:false}>ADD TO BAG</Button>
     
         

    </form>
    )

}
   
   

    
}


const mapDispatchToProps = {
    addOrderToBagActionThunk,
    addedItemInBag,
    defaultAddedItemInBag
}

export default  connect(null, mapDispatchToProps)( DetailItemFormBody)  