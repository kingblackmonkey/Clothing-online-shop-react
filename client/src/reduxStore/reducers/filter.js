const filterReducer = (state = '', action)=> {

    switch (action.type) {
      case "SET_FILTER":
       
        return action.byPrice
       
        case "SET_FILTER_DEFAULT":
       
          return action.filterDefault
         
         default:
        return state
    }
  }
  
  
  export default filterReducer