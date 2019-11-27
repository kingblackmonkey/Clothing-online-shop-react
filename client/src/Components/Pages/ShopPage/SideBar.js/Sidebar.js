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

                        <a className="refinement-link " href="#">graphic tees</a>


                        </li>

                        <li>

                        <a className="refinement-link " href="#">pocket tees</a>


                        </li>

                        <li>

                        <a className="refinement-link " href="#">stripe tees</a>


                        </li>

                        <li>

                        <a className="refinement-link " href="#">thermals</a>


                        </li>

                 </ul>

           </div>


           <div className="refinement-color">
                    <h3 className="toggle " tabindex="0">
                    Color
                    </h3>

                <ul className="selected-size-color-ul color  ">

                        <li className="swatch-beige">
                        <a style={{background: '#ecd5a9'}} href="#">
                                        </a>
                        </li>

                        <li className="swatch-black">
                        <a style={{background:'black'}} href="#">
                                        </a>
                        </li>

                        <li className="swatch-blue">
                        <a style={{background:'#036ba2'}} href="#">
                                      </a>
                        </li>

                        <li className="swatch-brown">
                        <a style={{background:'#916820'}} href="#" >
                                        </a>
                        </li>

                        <li className="swatch-burgundy">
                        <a style={{background:'#800020'}} href="#">
                                              </a>
                        </li>

                        <li className="swatch-gold">
                        <a style={{background:'#d0ac1e'}} href="#">
                                      </a>
                        </li>

                        <li className="swatch-green">
                        <a style={{background:'#1d9b1d'}} href="#">
                                        </a>
                        </li>

                        <li className="swatch-grey">
                        <a style={{backGround:'#777777'}} href="#">
                                      </a>
                        </li>

                        <li className="swatch-medium ">
                        <a style={{background:'#424f5f'}} href="#">
                                          </a>
                        </li>

                        <li className="swatch-mint">
                        <a style={{background:'#3eb489'}} href="#">
                                      </a>
                        </li>

                        <li className="swatch-multi">
                        <a style={{background:'#f6edda'}} href="#">
                                        </a>
                        </li>

                        <li className="swatch-off_white">
                        <a style={{background:'#f6edda'}} href="#">
                       
                        </a>
                        </li>

                        <li className="swatch-orange">
                        <a style={{background:'#ef9117'}} href="#">
                                          </a>
                        </li>


                        <li className="swatch-pink">
                        <a style={{background:'#ffc0cb'}} href="#">
                                      </a>
                        </li>

                        <li className="swatch-purple">
                        <a style={{background: '#850485'}} href="#">
                                          </a>
                        </li>


                        <li className="swatch-red ">
                        <a style={{background:'#d81720'}} href="#">
                                    </a>
                        </li>


                        <li className="swatch-silver">
                        <a style={{background:'#b8bbbd'}} href="#">
                                          </a>
                        </li>


                        <li className="swatch-turquoise">
                        <a style={{background:'#42b5a6'}} href="#">
                                                </a>
                        </li>


                        <li className="swatch-white">
                        <a style={{background:'white'}} href="#">
                                        </a>
                        </li>


                        <li className="swatch-yellow ">
                        <a style={{background:'#ffff00'}} href="#">
                                          </a>
                        </li>



                    </ul>





            </div>
                    
</div>
        
    )
}
export default SideBar