import React from 'react';

import { Route , Switch, Router} from 'react-router-dom'

import {connect} from 'react-redux'
import './firebase/firebase'
import {history} from './index'

import Menu from './Components/menu/Menu'
import  HomePage from './Components/Pages/HomePage/HomePage'
import ShopPage from './Components/Pages/ShopPage/ShopPage'
import DetailItemPage from './Components/Pages/DetailItemPage/DetailItemPage'
import  CheckoutPage from './Components/Pages/CheckoutPage/CheckoutPage'
import Footer from './Components/Footer/Footer'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/scss/notification.scss'

import ScrollMemory from 'react-router-scroll-memory';

class App extends React.Component{
   
  


   
   
   render(){
       
   return (

      <Router history = {history}>
            <ScrollMemory />
            <ReactNotification />
         
               <Menu />           
                
         <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop/:productName" component={ShopPage}/>
            <Route path="/shop/:productName/:id" component={DetailItemPage}/>
            <Route path="/checkout" component={CheckoutPage}/>
         </Switch>

            <Footer />
      </Router>
   

)
}

}



export default  connect()(App)  ;






