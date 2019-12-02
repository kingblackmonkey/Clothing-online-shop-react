import React , { useState } from 'react'
import { faFacebook, faInstagram, faTwitter, faPinterest, faSnapchat, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import './Footer.scss'
import { store } from 'react-notifications-component';
const Footer = ()=>{
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (evt)=>{
      evt.preventDefault();
    
      axios({
        url: 'emailSignup',
        method: 'post',
        data:{
           email: inputValue
        }
    }).then((res)=>{
          //  console.log(res)

    }).catch((err)=>{
          console.log(err)  
    }) 
  setInputValue('');

  store.addNotification({
    title: "Horray New Customer!",
    message: "Check Your Email for Welcome Email",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 6000,
      onScreen: true
    }
  });
  
  }

 return (
   <footer className="footer pt-5 mt-5">
      <div className="container">
              <div className="row">

          
                     <div className="footer-item col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3 ">

                              <div className="content-asset">
                                  <h2 >Guest Services</h2>

                                      <ul className="menu-footer menu pipe">
                                        <li><span  title="Go to Order Status">Order Status</span></li>
                                        <li><span  title="Go to Returns &amp; Exchanges">Returns &amp; Exchanges</span></li>
                                                <li><span href="" title="Go to Billing">Billing</span></li>
                                        <li><span  title="Go to Shipping">Shipping</span></li>
                                        <li><span  title="Go to Order Info">Order Info</span></li>
                                        <li><span  title="Go to Store Locator">Store Locator</span></li>
                                        <li><span  title="Go to Contact Us">Contact Us</span></li>
                                      </ul>
                              </div> 
                  </div>

                   <div className="footer-item col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3">
                        <div className="content-asset">

                                  <h2>Company</h2>
                                  <ul className="menu-footer menu pipe">
                                        <li><span href="" title="Go to About Us">About Us</span>

                                        </li>
                                        <li><span  title="Go to Jobs">Careers</span>

                                        </li>
                                        <li><span  target="_blank" title="Go to Investor Relations">Investor Relations</span>

                                        </li>
                                        <li><span  title="Go to We Care">We Care</span>

                                        </li>
                                        <li><span  title="Go to TLC">Tilly's Life Center</span>

                                        </li>
                                        <li><span  title="Go to Terms of Use">Terms of Use</span>

                                        </li>
                                        <li><span  title="Go to Privacy Policy">Privacy &amp; Cookie Policy</span>

                                        </li>
                                        <li><span  title="Go to Site Map">Site Map</span>

                                        </li>
                                        
                                  </ul>

                          </div>
                 </div>


                     <div className="footer-item footerForms col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3">

                        <form id="email-alert-signup" onSubmit={handleSubmit}>
                            <h2>Sign up for Email</h2>        
                            <div className="fields">
                                  <input type="email" id="email-alert-address" 
                                  className="input-text email"
                                   placeholder="example@email.com"
                                    value={inputValue} 
                                    aria-label="Email Address"
                                    onChange={(evt)=>{ setInputValue(evt.target.value)}}
                                  />

                                  <button type="submit"><span className="visually-hidden">Sign Up</span></button>
                            </div>
                        </form>
                    
                    </div>

                   <div className="footer-item add-app col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3">
                           <h2 className="for-desktop">CONNECT WITH US</h2>
         



                        <div className="content-asset">
                          <div className="social-links icon-container row justify-content-lg-between">
                             <span className="social-icon mr-2 mr-lg-0"> <FontAwesomeIcon icon={ faFacebook} /></span>
                             <span className="social-icon mr-2 mr-lg-0"> <FontAwesomeIcon icon={ faInstagram} /></span>
                            <span className="social-icon mr-2 mr-lg-0 "> <FontAwesomeIcon icon={ faTwitter} /></span>
                            <span className="social-icon mr-2 mr-lg-0"> <FontAwesomeIcon icon={ faPinterest} /></span>
                               <span className="social-icon mr-2 mr-lg-0" > <FontAwesomeIcon icon={ faSnapchat} /></span>
                               <span className="social-icon mr-2 mr-lg-0"> <FontAwesomeIcon icon={ faGooglePlus} /></span>
                            
                          </div>
                  </div>




                        <div className="content-asset">
                    <div className="btn-add-app">
                    
                        <span id="googlePlay"  title="Google Play" alt="Google Play" >
                          <img alt="google" className='img-thumbnail' src="https://i.ibb.co/gr7YWsJ/dw-btn-google-play.png" data-yo-loaded="true"></img>

                          </span>
                    </div>
                 </div> 

                         <div className="content-asset">
                    <div className="copyRightText">
                      © 2019 Clothing Shop.Co All Rights Reserved.
                    
                    </div>
                </div> 






              </div>
           </div>

      </div>




   </footer>
 )
}

export default Footer








