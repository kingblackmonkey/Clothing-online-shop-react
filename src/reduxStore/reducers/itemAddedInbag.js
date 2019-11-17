
  
  const number = (state = false, action)=>{
      switch (action.type) {
          
        case "ADDED_ITEM_IN_BAG":
         
            return action.addedItemInBag
       
       case "DEFAULT_ADDED_ITEM_IN_BAG":
          return action.addedItemInBag
          
          default:
            return state
        }
      }
      
      
      export default number