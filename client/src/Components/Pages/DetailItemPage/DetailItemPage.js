import React from 'react'
import {connect} from 'react-redux'
import DetailItemSmallScreen from './DetailItem/DetailItemSmallScreen/DetailItem'
import DetailItemBigScreen from './DetailItem/DetailItemBigScreen/DetailItem'


class  DetailItemPage extends React.Component{
  state = {
    smallScreenSize: false
  }
   
    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }

    handleResize = ()=> {
        let smallScreenSize= (window.innerWidth <= 768);
    
       if( smallScreenSize !==  this.state.smallScreenSize){
           this.setState(()=>({ smallScreenSize}))
       }
    }

    render(){
      return(
        <div className="container ">
         
            <div className="row justify-content-center no-gutters mt-5">
                <div className="col-12 col-md-7 col-lg-6">
                
                     <div style={{height:"700px"}} className="px-3 ">
                     
                         <img  style={{width:'100%', height:'100%'}} className="img-fluid" src={this.props.singleProduct.imageUrl} alt="product"></img>
 
                     </div>
                </div>
                <div className="col-12 col-md-5  col-lg-4 px-5 px-md-0 ">
                    {
                        this.state.smallScreenSize?
                          <DetailItemSmallScreen singleProduct = {this.props.singleProduct} category={this.props.match.params.productName}/>
                          :
                          <DetailItemBigScreen singleProduct = {this.props.singleProduct} category={this.props.match.params.productName}/> 
                          
                    }
                
                 </div>

            </div>
      
            
         </div>
            
        )
    
}
  
}

const mapStateToProps = (state, ownProps)=>{
    const items =  state.products[ownProps.match.params.productName].items
    const id =  parseInt(ownProps.match.params.id )
    
  const   [singleProduct] =  items.filter((item)=>{
                return item.id ===  id
        })
    return {
        singleProduct: {...singleProduct, basePrice: singleProduct.price }
    }
}
export default connect(mapStateToProps)(DetailItemPage)