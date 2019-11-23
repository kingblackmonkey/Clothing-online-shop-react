import React from 'react'
import ReactModal from 'react-modal';
import DetailItemFormBody from '../../../../DetailItemPage/DetailItem/DetailItemBigScreen/DetailItemBody/DetailItemFormBody'
import './ReactModal.scss'
const ModalForEdit = ({modalIsOpen,closeModal,  id ,  imageUrl, name, price,quantity,size,basePrice })=>{

  
   
   
    return (
     
            <ReactModal 
                    isOpen={modalIsOpen}                
                    onRequestClose={closeModal}
                    contentLabel="Edit Modal"
                    shouldCloseOnOverlayClick={true}                   
                >

                    <div className="row">
                            <div className="col-4">
                                        <div>
                                          <img  src={imageUrl} className="img-fluid"/>
                                        </div>   
                            </div>
                       
                            <div className="col-8">

                                     <div className="detail-item-header-edit-modal">
                                            <div className="detail-brand-edit-modal">
                                            </div>
                                            <span className="detail-link-to-brand-edit-modal">view all Brand </span>
                                            <h1 className="detail-item-title-edit-modal">{name}</h1>
                                    </div>

                                                        
                                    <DetailItemFormBody 
                                    id= {id}
                                    basePrice= {basePrice}   
                                    price = {price}
                                    modal={true}
                                    modalQuantity= {quantity}  
                                    oldSize = {size} 
                                    closeModal={closeModal}
                                    />
                            </div>
                    </div>

               
                  
                </ReactModal >
     
        
    )
}

export default  ModalForEdit