import React from 'react'
import './DetailItem.scss'
import Description from '../../Description/Description'
import  DetailItemFormBody from './DetailItemBody/DetailItemFormBody'
export default class DetailItemBigScreen extends React.Component{
   
    state = {
    
        detailTextHidden: true
    }

    toggleDetailText = ()=>{
        this.setState(({detailTextHidden})=>{
            return{
                detailTextHidden: !detailTextHidden
            }
        })
   }


  
    render(){
        return (
        <div className ="mt-5 mt-md-0 detail-item  container">
           <div className="detail-item-header">
                <div className="detail-brand-big-screen">
                </div>
                <span className="detail-link-to-brand">view all Brand </span>
                <h1 className="detail-item-title">{this.props.singleProduct.name}</h1>
           </div>
            
         <DetailItemFormBody 
         {...this.props.singleProduct}
         category={this.props.category}    
         />
           
            <div className="detail-item-bottom">
                    <div>
                        <Description {...this.props.singleProduct} {...this.state} toggleDetailText={this.toggleDetailText}/>
                    </div> 
           </div>
    

                

         

         
            
       </div>
        )
    }
}