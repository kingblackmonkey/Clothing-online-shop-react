import React from 'react'
import Collection from './Collection'
import SideBar from './SideBar.js/Sidebar'
const ShopPage = ({match})=>{
    return(
        <div className="container pt-5">
            <div className="row no-gutters">
                    <div className="col-sm-12 col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-sm-12 col-md-10 ">
                        <Collection category= {match.params.productName}/>
                    </div>
                 
            </div>
           

        </div>
    )
}

export default ShopPage