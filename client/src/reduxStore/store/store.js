import { createStore} from 'redux'
import { combineReducers, applyMiddleware  } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import productReducer from '../reducers/product'

import itemAddedInbagReducer from  '../reducers/itemAddedInbag'
import filterReducer from '../reducers/filter'
import ordersInBagReducer from '../reducers/ordersInBag'
import userReducer from '../reducers/user'
import odersInBagForSignedInUserReducer from '../reducers/odersInBagForSignedInUser'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import modalReducer from '../reducers/modal'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ordersInBag'] 
}


const persistedReducer = persistReducer(persistConfig, combineReducers(
  {
    user: userReducer,
    odersInBagForSignedInUser: odersInBagForSignedInUserReducer,
    products: productReducer,
    filter: filterReducer,
   itemAddedInbag: itemAddedInbagReducer,
    ordersInBag: ordersInBagReducer,
    modal: modalReducer
  }
  
  
  ));


  export let store = createStore( persistedReducer , composeWithDevTools(
      applyMiddleware(thunk),
      
    ));

  export let persistor = persistStore(store)
  
    
    
  





