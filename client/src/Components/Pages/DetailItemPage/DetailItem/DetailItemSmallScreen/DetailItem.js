import React from 'react'
import Select from '../../../../Select/Select' 
import Button from '../../../../Button/Button'
import './DetailItem.scss'
import DetailItemFormBody from './DetailItemFormBody/DetailItemFormBody'
import Description from '../../Description/Description'
export default class DetailItemSmallScreen extends React.Component{
   
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
        <div className ="mt-5 mt-md-0 detail-item">
         
          <div className="detail-item-header-small-screen">
               <h3>${this.props.singleProduct.price}</h3>
            <div>
                color: Same As Picture
            </div>
         </div> 
           

         <DetailItemFormBody  {...this.props.singleProduct}/> 



            <div className="detail-item-header-small-screen" >
                <Description {...this.props.singleProduct} {...this.state} toggleDetailText={this.toggleDetailText}/>
            </div> 

         
            
       </div>
        )
    }
}