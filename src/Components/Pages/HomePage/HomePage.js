import React from 'react'
import './HomePage.scss'

import  PictureGrid from './PictureGrid/PictureGrid'
const HomePage = ()=>{
    const pictures= {
        img1:'/img/img-store-front/banter-snaps-MqaUWQoXgbc-unsplash.jpg',
        img2:'/img/img-store-front/elevate-mL19pj3_5Iw-unsplash.jpg',
       
    }
    return (
        <div className="home-page">           
            <h4 className="free-shipping-title text-center mt-md-4"> FREE SHIPPING ON ORDERS OVER $49 <span>details</span></h4>
            <p className="pick-up-title text-center"><span>icon</span>PICK UP YOUR ITEMS IN A STORE TODAY!</p>
            <PictureGrid {...pictures} />

        </div>
    )
}

export default HomePage