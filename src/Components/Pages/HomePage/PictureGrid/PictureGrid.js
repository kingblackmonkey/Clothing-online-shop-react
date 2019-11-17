import React from 'react'
import './PictureGrid.scss'
import PictureGridItem from './PictureGridItem'
import Button from '../../../Button/Button'
const PictureGrid = ({img1,img2})=>{
    return (
        <div className="container picture-grid-container ">
            <div className="row picture-grid-one no-gutters">          
             
                <PictureGridItem className = "col-md-6  picture-grid-item">    
                    <img  className="img-fluid p-2" src={img1}></img>
                    <Button> Shop Watch</Button>
                </PictureGridItem>

                <PictureGridItem className="col-md-6  picture-grid-item">    
                    <img  className="img-fluid p-2" src={img2}></img>
                    <Button> Shop HandBag</Button>
                </PictureGridItem>
     
            </div>

            <div className="row picture-grid-two my-5 no-gutters">          
               
                <PictureGridItem className="col-6 picture-grid-item-first "> 
                     <Button> Shop Men</Button>          
                </ PictureGridItem>
                <PictureGridItem className="col-6  picture-grid-item-second ">
                     <Button> Shop Women</Button>   
                </PictureGridItem>
                   
          
              
            </div> 

            <div className="row picture-grid-three no-gutters">          
                <PictureGridItem  className="col-12  picture-grid-item mx-2"/>   
              
            </div> 
          
        </div>
    )
}
export default PictureGrid






