import React from 'react';
// import store from './reduxStore/store/store'
// import {Provider} from "react-redux"
import { BrowserRouter , Route , Switch, Router, HashRouter} from 'react-router-dom'
// import Menu from './Components/Menu'
// import DashBoard from './Components/DashBoard'
// import  WrapperAddIncome from './Components/AddIncome/AddIncome'
// import  WrapperAddExpense from './Components/AddExpense/AddExpense'
// import ErrorPage from './Components/Error'
// import WrapperEditExpense from './Components/EditExpense/EditExpense'
// import WrapperEditIncome from './Components/EditIncome/EditIncome'
// import Login from './Components/login'
// import {fetchExpensesThunk} from './reduxStore/actions/expense'
// import {fetchIncomeThunk} from './reduxStore/actions/income'
import {connect} from 'react-redux'
import './firebase/firebase'
import {history} from './index'
// import PrivateRoute from './Components/PrivateRoute'






import Menu from './Components/menu/Menu'
import  HomePage from './Components/Pages/HomePage/HomePage'
import ShopPage from './Components/Pages/ShopPage/ShopPage'
import DetailItemPage from './Components/Pages/DetailItemPage/DetailItemPage'
import  CheckoutPage from './Components/Pages/CheckoutPage/CheckoutPage'
import Footer from './Components/Footer/Footer'

import ScrollMemory from 'react-router-scroll-memory';

class App extends React.Component{
   
  


   
   
   render(){
       
   return (

      <Router history = {history}>
        
            <ScrollMemory />
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






