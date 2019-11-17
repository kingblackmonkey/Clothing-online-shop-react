import addUpOrders from '../utilityFunctions/addUpOrders'

const ordersInBagReducer = (state = [], action)=> {

    switch (action.type) {
      case "ADD_ORDER":
       
        return state.length === 0 ? [...state, action.order] : addUpOrders(state,action.order)
     
      case "DEFAULT_ORDER":
        return []
      
         default:
        return state
    }
  }
  
  
  export default ordersInBagReducer