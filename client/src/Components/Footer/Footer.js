import React from 'react'
import './Footer.scss'

const Footer = ()=>{
 return (
   <footer className="footer pt-5 mt-5">
      <div className="container">
              <div className="row">

          
                     <div className="footer-item col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3 ">

                              <div className="content-asset">
                                  <h2 >Guest Services</h2>

                                      <ul className="menu-footer menu pipe">
                                        <li><a href="#" title="Go to Order Status">Order Status</a></li>
                                        <li><a href="#" title="Go to Returns &amp; Exchanges">Returns &amp; Exchanges</a></li>
                                                <li><a href="" title="Go to Billing">Billing</a></li>
                                        <li><a href="#" title="Go to Shipping">Shipping</a></li>
                                        <li><a href="#" title="Go to Order Info">Order Info</a></li>
                                        <li><a href="#" title="Go to Store Locator">Store Locator</a></li>
                                        <li><a href="#" title="Go to Contact Us">Contact Us</a></li>
                                      </ul>
                              </div> 
                  </div>

                   <div className="footer-item col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3">
                        <div className="content-asset">

                                  <h2>Company</h2>
                                  <ul className="menu-footer menu pipe">
                                        <li><a href="" title="Go to About Us">About Us</a>

                                        </li>
                                        <li><a href="#" title="Go to Jobs">Careers</a>

                                        </li>
                                        <li><a href="#" target="_blank" title="Go to Investor Relations">Investor Relations</a>

                                        </li>
                                        <li><a href="#" title="Go to We Care">We Care</a>

                                        </li>
                                        <li><a href="#" title="Go to TLC">Tilly's Life Center</a>

                                        </li>
                                        <li><a href="#" title="Go to Terms of Use">Terms of Use</a>

                                        </li>
                                        <li><a href="#" title="Go to Privacy Policy">Privacy &amp; Cookie Policy</a>

                                        </li>
                                        <li><a href="#" title="Go to Site Map">Site Map</a>

                                        </li>
                                        
                                  </ul>

                          </div>
                 </div>


                     <div className="footer-item footerForms col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3">

                        <form id="email-alert-signup" >
                            <h2>Sign up for Email</h2>        
                            <div className="fields">
                                  <input type="text" id="email-alert-address" className="input-text email" placeholder="example@email.com" value="" aria-label="Email Address"/>

                                  <button type="submit"><span className="visually-hidden">Sign Up</span></button>
                            </div>
                        </form>
                        <form >
                              <h2>Find A Store</h2>
                        
                              <div className="fields">                 
                        
                                <input type="text" id="find-a-store-alert" />
                                <button className="btn-store-locator " title="Locate Stores" aria-label="Locate Stores" type="submit" name="dwfrm_storelocator_findbyzip" value="Search">
                                      <span className="visually-hidden">Stores</span>
                                </button>
                              </div>
                          </form>
                    </div>

                   <div className="footer-item add-app col-md-6 col-lg-3 pt-sm-3 pt-lg-5 pb-5 pl-3">
                           <h2 className="for-desktop">CONNECT WITH US</h2>
         



                        <div className="content-asset">
                          <ul className="social-links">
                            <li><a title="Tillys on Facebook" aria-label="Tillys on Facebook" href="#" >Facebook</a></li>
                            <li><a title="Tillys on Instagram" aria-label="Tillys on Instagram" href="#" >Instagram</a></li>
                            <li><a title="Tillys on Pinterest" aria-label="Tillys on Pinterest" href="#" >Pinterest</a></li>
                            <li><a title="Tillys on Twitter" aria-label="Tillys on Twitter" href="#">Twitter</a></li>
                            <li><a title="Tillys on YouTube" aria-label="Tillys on YouTube" href="#">YouTube</a></li>
                            <li><a title="Tillys on Snapchat" aria-label="Tillys on Snapchat" href="#" >Snapchat</a></li>
                          </ul>
                  </div>




                        <div className="content-asset">
                    <div className="btn-add-app">
                    
                        <a id="googlePlay" href="#" title="Google Play" alt="Google Play" >
                          <img className='img-thumbnail' src="https://i.ibb.co/gr7YWsJ/dw-btn-google-play.png" data-yo-loaded="true"></img>

                          </a>
                    </div>
                 </div> 

                         <div class="content-asset">
                    <div class="copyRightText text-right">
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








