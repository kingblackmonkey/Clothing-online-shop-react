import addUpOrders from '../utilityFunctions/addUpOrders'

const ordersInBagReducer = (state = [], action)=> {

    switch (action.type) {
      case "ADD_ORDER":
       
        return state.length === 0 ? [...state, action.order] : addUpOrders(state,action.order)
    
      case   'REMOVE_ITEM_FOR _GUEST':
      
        return state.filter((item)=>{
            return item.id !== action.id || item.size !== action.size
        })
        
     case 'UPDATE_ITEM_FOR _GUEST' :     
       return state.map((item)=>{
           console.log( item )
           return item.id === action.id && item.size === action.oldSize ? 
                  {...item, size: action.size, quantity:action.quantity, price: action.price}:
                  item
       })


      case "DEFAULT_ORDER":
        return []
      
         default:
        return state
    }
  }
  
  
  export default ordersInBagReducer