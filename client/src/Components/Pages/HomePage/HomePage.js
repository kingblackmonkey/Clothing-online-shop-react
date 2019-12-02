import React from 'react'
import './HomePage.scss'

import  PictureGrid from './PictureGrid/PictureGrid'
const HomePage = ()=>{
    const pictures= [
        {
            buttonText:'Shop Watch',
             img:'https://i.ibb.co/Zg4Dn7j/banter-snaps-Mqa-UWQo-Xgbc-unsplash.jpg',
             routeName:'/shop/men_watch'
        },
        {
            buttonText:'Shop HandBag',
             img:'https://i.ibb.co/DKc4Rys/elevate-m-L19pj3-5-Iw-unsplash.jpg',
             routeName:'/shop/women_hand_bags'

        },
      

    ]

       
       
       
    
    return (
        <div className="home-page">           
            <h4 className="free-shipping-title text-center mt-md-4"> FREE SHIPPING ON ORDERS OVER $49 <span>details</span></h4>
            <p className="pick-up-title text-center"><span>icon</span>PICK UP YOUR ITEMS IN A STORE TODAY!</p>
            <PictureGrid  pictures = {pictures} />

        </div>
    )
}

export default HomePage