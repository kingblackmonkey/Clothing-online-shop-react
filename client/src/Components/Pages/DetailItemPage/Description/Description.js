import React from 'react'
import './Description.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faPinterest, faSnapchat} from '@fortawesome/free-brands-svg-icons'


const Description = ({des, toggleDetailText, detailTextHidden})=>{
 

   
 
    return (
        <div className="detail">
            <div>
                <h4> 40 Reward Points </h4>
            </div>
            <div className="detail-content">
                <div 
                className={`detail-header ${detailTextHidden? '':'active'}   `} 
                onClick={toggleDetailText}>
                    <h3>DETAILS</h3>                 
                </div>
                <div 
                className = {`detail-text ${detailTextHidden? '':'active'}   `}        
                
                >

                    <p>{des}</p>
                </div>
                
            </div>
              
            <div className="detail-brand-small-screen">
                
            </div>
            <div className="icon row">
                <span className="social-icon"> <FontAwesomeIcon icon={ faFacebook} /></span>
                <span className="social-icon"> <FontAwesomeIcon icon={ faInstagram} /></span>
                <span className="social-icon"> <FontAwesomeIcon icon={ faTwitter} /></span>
                <span className="social-icon"> <FontAwesomeIcon icon={ faPinterest} /></span>
                <span className="social-icon"> <FontAwesomeIcon icon={ faSnapchat} /></span>
                


            </div>
        </div>
    )
   
    
}

export default Description