import React from 'react'
import Select from '../../../../../Select/Select'
import Button from '../../../../../Button/Button'
import {connect} from 'react-redux'
import {addOrderToBagActionThunk} from '../../../../../../reduxStore/actions/ordersInBag'
import  {addedItemInBag, defaultAddedItemInBag} from '../../../../../../reduxStore/actions/itemAddedInbag'
// import './DetailItemFormBody.scss' come back to make its own file style for this form body



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
  
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
}



    render(){

    return (
        
      
        <form className="detail-item-body-small-screen" onSubmit={this.handleSubmit}>
                  <div className="row ">
                    <div className="col-10">
                        {
                        this.props.category==='men_watch' || this.props.category==='women_hand_bags'?

                          <Select 
                        value = {['Size','All Size']}
                        name= 'Size' 
                        className="size"
                       
                        selectedSize={this.state.selectedSize}  
                        handelChange={this.handelChange}
                        
                        />:
                          <Select 
                        value = {['Size','Small','Medium', 'Large']}
                        name= 'Size' 
                        className="size"
                       
                        selectedSize={this.state.selectedSize}  
                        handelChange={this.handelChange}
                        
                        />
                        
                        }
                      
                    </div>
                    <div className="col-2">
                        <span className="size-chart"> Size Chart</span>
                    </div>                  
                </div>

                <div className= "p-4">
                    <span className="quantity-text">Qty:</span>
                    <Select 
                    value = {[1,2,3,4,5,6,7,8]} 
                    name= 'Quantity' 
                    className="quantity"                 
                    selectedQuanity= {this.state.selectedQuanity}
                    handelChange={this.handelChange}
                   />
                    { this.state.selectedSize === 'Size' &&  <div>
                                        <p className="note pt-3">Select Size, then click ADD TO BAG.</p>
                                    </div>
                    }

                    <Button type="submit" className="add-to-bag"  disabled={this.state.selectedSize==='Size'?true:false}>ADD TO BAG</Button>
                </div>
         
        </form>
    )

} 
   

    
}

const mapDispatchToProps = {
    addOrderToBagActionThunk,
    addedItemInBag,
    defaultAddedItemInBag
}



export default connect(null,mapDispatchToProps)(DetailItemFormBody) 