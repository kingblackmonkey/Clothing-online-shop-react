import React from 'react'
import {connect} from 'react-redux'
import CollectionItem from "./CollectionItem"
import Form from './Form/Form'
import {filterProducts } from './manipulateData/manipulateData'

const  Collection = ({products,category, routeName})=>{


    return(
      <div  >
        <Form />
        <div className="row" >
              <div className="col-12 collection-header">
                  <h2 className="ml-5">{category}</h2>

              </div>

              <div className="col-12">
                 
              </div>
             

        </div>
    

        <div className="row no-gutters">
          {
            products.map((item,i)=>{
                return <CollectionItem key={i} route={routeName} {...item}/>
            })
          }
        
        </div>
      </div>
   
    )
  

    
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