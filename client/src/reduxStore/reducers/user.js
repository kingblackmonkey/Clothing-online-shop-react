const userReducer = (state = {name:'guest'}, action)=> {

    switch (action.type) {
      case "SIGN_USER_IN":
       
        return action.user
       
      case "SIGN_USER_OUT":
        return action.user
         default:
        return state
    }
  }
  
  
  export default userReducer