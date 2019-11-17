const authUserIdReducer = (state = {}, action)=> {

    switch (action.type) {
      case "AUTHENTICATED":
       
        return action.uId

  
         default:
        return state
    }
  }
  
 export default authUserIdReducer