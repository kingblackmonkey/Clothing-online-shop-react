import React from 'react'
import {connect} from 'react-redux'
import CollectionItem from "./CollectionItem"
import Form from './Form/Form'
import {filterProducts } from './manipulateData/manipulateData'



class Collection  extends React.Component{
  state = {
    loading: true
  };


  imagesLoaded = (parentNode)=> {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (let i = 0; i < imgElements.length; i += 1) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }
    return true;
  }
  
  handleImageChange = () => {
    this.setState(()=>(
      {
        loading: !this.imagesLoaded(this.galleryElement)
      }
    ));
  }


            render(){
              
                      return(
                        <div  >
                           {
                               this.state.loading? <div> </div>:''
                            }
                         
                          <Form />
                          <div className="row" >
                                <div className="col-12 collection-header">
                                    <h2 style={{color:'#333', fontSize: '20px',fontWeight: '600'}} className="ml-5">{this.props.category}</h2>

                                </div>

                                <div className="col-12">
                                  
                                </div>
                              

                          </div>


                          <div 
                          className="row no-gutters"   
                          ref={element => {
                            this.galleryElement = element;
                          }}
                          >
                           
                            {
                              
                            this.props.products.map((item,i)=>{
                                  return <CollectionItem 
                                  key={i} route={this.props.routeName} {...item} 
                                  handleImageChange = {this.handleImageChange}/>
                              })
                            }
                          
                          </div>
                        </div>

                      )
                
            }

                
  }

const mapStateToProps = (state, ownProps)=>{
  // coppy to new arry for sort 
  // we dont want to change the original array in redux
  const products = [...state.products[ownProps.category].items];
    return {
      products: filterProducts(products, state.filter) ,
      category: state.products[ownProps.category].title,
      routeName: state.products[ownProps.category].routeName,
      
    }
}


export default connect(mapStateToProps)(Collection) 