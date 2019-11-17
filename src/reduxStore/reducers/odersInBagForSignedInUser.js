import addUpOrders from '../utilityFunctions/addUpOrders'

import checkExistingItemForSignInUserInRedux from '../utilityFunctions/checkExistingItemForSignInUserInRedux'


 const odersInBagForSignedInUserReducer = (state = [], action)=> {

    switch (action.type) {
      case "ADD_ORDER_FOR_SIGNED_IN_USER":
       
        return state.length === 0 ? [...state, action.order] : addUpOrders(state,action.order);

      case   "ADD_ORDER_FOR_SIGNED_IN_USER_FROM_FIREBASE_TO_REDUX":
        return checkExistingItemForSignInUserInRedux(state, action.order, action.pushOrUpdate)
      case "DEFAULT_ORDER_SIGNED_IN_USER":
        return [];
       
        default:
        return state;
    }
  }
  
  
  export default odersInBagForSignedInUserReducer