import React from 'react'
import Select from '../../../../Select/Select'
import {connect} from 'react-redux'
import {removeOrderForGuest, removeOrderForSignedInUserThunk} from '../../../../../reduxStore/actions/removeOrderInbag'
import {openModalAction, closeModalAction} from '../../../../../reduxStore/actions/modal'
import ModalForEdit   from './ReactModal/ReactModal'
class CheckoutPageTopBody extends React.Component{
    state= {
        selectedQuantity : this.props.quantity,
        modalIsOpen: false
      
    }

    handelChange= (e)=>{
        const value = e.target.value;
        
    }

    handleRemove=(idOrFirebaseId,size,id)=>{
       
        if( this.props.userName === 'guest')  this.props.removeOrderForGuest(idOrFirebaseId,size)
        if(this.props.userName !== 'guest') this.props.removeOrderForSignedInUserThunk(idOrFirebaseId)
        
  
       
    }

    handleOpenModal= ()=>{
        this.setState(()=>({  modalIsOpen: true}))
    }
    handleCloseModal= ()=>{
        this.setState(()=>({  modalIsOpen: false}))
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
                                          <span  
                                          onClick={this.handleOpenModal}
                                          
                                          className="checkout-top-body-number-edit">Edit</span> 
                                          < ModalForEdit   
                                          id={this.props.firebaseItemId? this.props.firebaseItemId:this.props.id  }
                                          imageUrl={this.props.imageUrl}
                                          name={this.props.name}
                                          price={this.props.price}
                                          quantity={this.props.quantity}
                                          size= {this.props.size}  
                                          closeModal={this.handleCloseModal}  
                                          modalIsOpen ={this.state.modalIsOpen}
                                          basePrice = {this.props.basePrice}
                                         
                                          />
                                        
                                          <span   
                                          style={{cursor: 'pointer'}}                                       
                                          className="checkout-top-body-number-remove"
                                          onClick = {()=>{
                                             this.props.firebaseItemId?  
                                             this.handleRemove(this.props.firebaseItemId):
                                            this.handleRemove(this.props.id, this.props.size)
                                          }}
                                          >
                                              Remove</span>
                                         
                                        </div>
                                    </div>
                                    <div className="col-6 order-md-1">
                                        <span className="checkout-top-body-number-quantity-text">Qty:</span> <span>{this.props.quantity}</span>
                                    </div>
                                </div>
                           
        
                            </div>
        
                       </div>
                </div>              
           </div>
            )


    }
}
const mapStateToProps = (state)=>{
    return {
        userName: state.user.name,
        modalIsOpen: state.modal
      
    }
}

const mapDispatchToProps = {
    removeOrderForGuest,
    removeOrderForSignedInUserThunk,
    openModalAction,
    closeModalAction

}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPageTopBody) 