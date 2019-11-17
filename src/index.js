import React from 'react';
import ReactDOM from 'react-dom';

 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import App from './App';
import * as firebase from "firebase/app";
import "firebase/auth";
import {store, persistor}from './reduxStore/store/store'
import {Provider} from "react-redux"
// import {fetchExpensesThunk} from './reduxStore/actions/expense'
// import {fetchIncomeThunk} from './reduxStore/actions/income'
import { createBrowserHistory } from 'history';
// import authUserIdGenerator from './reduxStore/actions/authUserId'
import database from './firebase/firebase'
import {addProductActionThunk} from './reduxStore/actions/products'
import { transferOrderToBagActionThunk,  
         defaultOrderInBagForSignInUser,
         defaultOrderInBagForGuest,
         pullAllOrderItemsFirebaseToReduxWhenRefreshThunk
        } from './reduxStore/actions/ordersInBag'
import { PersistGate } from 'redux-persist/integration/react'
import {signUserIn,  signUserOut} from './reduxStore/actions/user'

export const history = createBrowserHistory();




// database.ref(`/users/myuserid/items`).push({id:12,name:'bloh',price:5});


const fetchDataAndFillReduxStore =async()=>{


    
     await store.dispatch(addProductActionThunk())  

     ReactDOM.render(
   
      <Provider store={store}>     
          <PersistGate loading={null} persistor={persistor}>
                <App  />      
         </PersistGate>
             
      </Provider>, 
        
        
        document.getElementById('root')
        
        
        ); 
     
}



firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
               
                        store.dispatch(signUserIn(user.displayName, user.uid));
                      
                        // create thunk action that transfer item of guest to signed in user
                        // in that action check if there is existing item then you add it to item bag in in redux 
                // for sign in user
                        // if not you dont add
                       
                        // go to transferOrderToBagActionThunk to read the instruction
//the problem in transferOrderToBagActionThunk is that when guest switch from guest to sign in
// the item in bag for sign in user in redux work but not with firebase when there is a same item of id and quantity and pricein firebase
                        store.dispatch( pullAllOrderItemsFirebaseToReduxWhenRefreshThunk())        
                        store.dispatch( transferOrderToBagActionThunk());
                        store.dispatch( defaultOrderInBagForGuest())
                        // create action to pull items from firbase back to bag for signed in user
                        fetchDataAndFillReduxStore();

                        console.log('sign in')
               
                    
        } else {
                store.dispatch( signUserOut())
                store.dispatch( defaultOrderInBagForSignInUser())
                store.dispatch( defaultOrderInBagForGuest())
                fetchDataAndFillReduxStore();
                console.log('sign out')
        }
      });



