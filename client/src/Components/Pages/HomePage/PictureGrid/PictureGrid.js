import React from 'react'
import './PictureGrid.scss'
import PictureGridItem from './PictureGridItem'
import Button from '../../../Button/Button'
class  PictureGrid extends React.Component{
    

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
        return (
            <div className="container picture-grid-container ">
            
       
              
                <div 
                   className="row picture-grid-one no-gutters"   
                   ref={element => {
                            this.galleryElement = element;
                          }} 
                          
                >    
                    {
                
                      this.props.pictures.map((item, i)=>(
                        <PictureGridItem  key={i} className = {`col-md-6  picture-grid-item ${this.state.loading?'':'visible'}`} imageSource={item.img} >    
                               <img  className="img-fluid p-2" src={item.img} alt="product"  onLoad={()=>{this.handleImageChange()}} />
                               <Button  routeName={this.props.pictures[i].routeName} > {this.props.pictures[i].buttonText}</Button>
                        </PictureGridItem>
                          )
                     
                    )          
                  
                    }     

                        

         
                </div>
       
                <div className="row picture-grid-two my-5 no-gutters">
                  
                   <PictureGridItem className="col-6 picture-grid-item-first "> 
                         <Button routeName="/shop/men_t_shirt"> Shop Men</Button>          
                    </ PictureGridItem> 
    
         
                     
                  
                     <PictureGridItem className="col-6  picture-grid-item-second ">
                                <Button routeName="/shop/women_t_shirt"> Shop Women</Button>                
                          </PictureGridItem> 
                    
                    
                   
                  
                     
    
    
    
    
    
                 
                       
              
                  
                </div> 
    
                <div className="row picture-grid-three no-gutters">   
            
                       
                     <PictureGridItem  className="col-12  picture-grid-item mx-2"/>   
                    
                     
    
    
                  
                </div> 
              
            </div>
        )
    }
 
}
export default PictureGrid






