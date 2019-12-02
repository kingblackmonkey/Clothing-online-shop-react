import React from 'react'
import './SideBar.scss'

const SideBar= ()=>{

    return(
        <div className="side-bar">
          <div className="refinement  category-refinement  ">
            <h3 className="toggle expanded" style={{borderBottom: '1px dotted #ccc '}}>            
                Category
            </h3>
                 <ul className="category-level-1">

                        <li>

                        <span className="refinement-link ">Men Shirts</span>


                        </li>

                        <li>

                        <span className="refinement-link ">Men Watch</span>


                        </li>

                        <li>

                        <span className="refinement-link ">Women Shirt</span>


                        </li>

                        <li>

                        <span className="refinement-link ">Woman Handbags</span>


                        </li>

                 </ul>

           </div>


           <div className="refinement-color">
                    <h3 className="toggle " >
                    Color
                    </h3>

                <ul className="selected-size-color-ul color  ">

                        <li className="swatch-beige">
                        <span style={{background: '#ecd5a9'}}>
                                        </span>
                        </li>

                        <li className="swatch-black">
                        <span style={{background:'black'}}>
                                        </span>
                        </li>

                        <li className="swatch-blue">
                        <span style={{background:'#036ba2'}}>
                                      </span>
                        </li>

                        <li className="swatch-brown">
                        <span style={{background:'#916820'}} >
                                        </span>
                        </li>

                        <li className="swatch-burgundy">
                        <span style={{background:'#800020'}}>
                                              </span>
                        </li>

                        <li className="swatch-gold">
                        <span style={{background:'#d0ac1e'}}>
                                      </span>
                        </li>

                        <li className="swatch-green">
                        <span style={{background:'#1d9b1d'}}>
                                        </span>
                        </li>

                        <li className="swatch-grey">
                        <span style={{backGround:'#777777'}}>
                                      </span>
                        </li>

                        <li className="swatch-medium ">
                        <span style={{background:'#424f5f'}}>
                                          </span>
                        </li>

                        <li className="swatch-mint">
                        <span style={{background:'#3eb489'}}>
                                      </span>
                        </li>

                        <li className="swatch-multi">
                        <span style={{background:'#f6edda'}}>
                                        </span>
                        </li>

                        <li className="swatch-off_white">
                        <span style={{background:'#f6edda'}}>
                       
                        </span>
                        </li>

                        <li className="swatch-orange">
                        <span style={{background:'#ef9117'}}>
                                          </span>
                        </li>


                        <li className="swatch-pink">
                        <span style={{background:'#ffc0cb'}}>
                                      </span>
                        </li>

                        <li className="swatch-purple">
                        <span style={{background: '#850485'}}>
                                          </span>
                        </li>


                        <li className="swatch-red ">
                        <span style={{background:'#d81720'}}>
                                    </span>
                        </li>


                        <li className="swatch-silver">
                        <span style={{background:'#b8bbbd'}}>
                                          </span>
                        </li>


                        <li className="swatch-turquoise">
                        <span style={{background:'#42b5a6'}}>
                                                </span>
                        </li>


                        <li className="swatch-white">
                        <span style={{background:'white'}}>
                                        </span>
                        </li>


                        <li className="swatch-yellow ">
                        <span style={{background:'#ffff00'}}>
                                          </span>
                        </li>



                    </ul>





            </div>
                    
</div>
        
    )
}
export default SideBar