import React from 'react'
import './PictureGrid.scss'
import PictureGridItem from './PictureGridItem'
import Button from '../../../Button/Button'
class  PictureGrid extends React.Component{
    

state = {
    images: [],
    
}
 onLoadHandler = (imgSrc)=>{
         
          
            
               
          this.setState(({images})=>({images: [...images, imgSrc] }))
            

  
 }
  
 

        
      
    

    render(){
        return (
            <div className="container picture-grid-container ">
                <div className="row picture-grid-one no-gutters">    
                    {
                
              this.state.images.length === 2 ?      this.state.images.map((item, i)=>(
                        <PictureGridItem  key={i} className = "col-md-6  picture-grid-item" imageSource={item.img} >    
                               <img  className="img-fluid p-2" src={item} alt="product"></img>
                               <Button  routeName={this.props.pictures[i].routeName} > {this.props.pictures[i].buttonText}</Button>
                        </PictureGridItem>
                          )
                     
                    ):''            
                  
                    }     
         
                </div>
                <div  className="hidden-holder" style={{display:'none'}}>
                       {this.props.pictures.map((item,i)=>(
                            <img 
                            key={i}
                            alt="product"
                            src={item.img} 
                            onLoad={()=>{
                                this.onLoadHandler(item.img)
                               
                            }} 
                             />
                       ))}    
                </div>
    
                <div className="row picture-grid-two my-5 no-gutters">
                  {this.state.images.length === 2 ?
                   <PictureGridItem className="col-6 picture-grid-item-first "> 
                         <Button routeName="/shop/men_t_shirt"> Shop Men</Button>          
                    </ PictureGridItem> :''
    
                        }  
                     {
                        this.state.images.length === 2 ? 
                         <PictureGridItem className="col-6  picture-grid-item-second ">
                                <Button routeName="/shop/women_t_shirt"> Shop Women</Button>                
                          </PictureGridItem> 
                    : ''
                     }   
                   
                  
                     
    
    
    
    
    
                 
                       
              
                  
                </div> 
    
                <div className="row picture-grid-three no-gutters">   
                {
                         this.state.images.length === 2 ? 
                                         <PictureGridItem  className="col-12  picture-grid-item mx-2"/>   
                    : ''
                     }  
    
    
                  
                </div> 
              
            </div>
        )
    }
 
}
export default PictureGrid






