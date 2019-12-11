import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const TopBar = ()=>(
 
        <div className = 'top-bar '>
            <div className="row">
                <div className="col-lg-6 free-shipping-container ">
                   <div className="free-shipping">
                         <span className="free-shipping-text"><strong style={{fontSize:'14px'}}>FREE SHIPPING ON ALL ORDERS</strong></span>

                   </div>
                    
                   
                </div>
                <div className="col-lg-6 location-container ">
                    <div className="location">
                         <span><FontAwesomeIcon icon={ faMapMarkerAlt}/></span>
                           <span>Your Store: <strong>Plaza Hollywood</strong></span>
                    </div>

                   
                </div>
            </div>
        </div>
    
)

export default TopBar