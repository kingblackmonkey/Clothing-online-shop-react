import database from '../../firebase/firebase'
import { async } from 'q'


const addOrderToBag = (order)=>{
    return {
        type: "ADD_ORDER",
        order
     }
}



const addOrderToBagForSignedInUser = (order)=>{
    return {
        type: "ADD_ORDER_FOR_SIGNED_IN_USER",
        order
     }
}


const addOrderToBagForSignedInUserFromFirebaseToRedux = (order, pushOrUpdate)=>{
    return {
        type: "ADD_ORDER_FOR_SIGNED_IN_USER_FROM_FIREBASE_TO_REDUX",
        order,
        pushOrUpdate
     }
}

export const defaultOrderInBagForGuest = ()=>{
    return {
        type: "DEFAULT_ORDER"
      
     }
}

export const defaultOrderInBagForSignInUser = ()=>{
    return {
        type: "DEFAULT_ORDER_SIGNED_IN_USER"
      
     }
}
  

const findExistingItem= async(userid, order)=>{
   let items = []
    // loop through the items of firebase
   const snapshot =  await database.ref(`/users/${userid}/items`).once("value");
   snapshot.forEach(function(childSnapshot) {
   
    var key = childSnapshot.key;
    // add each item to new array
    var childData = childSnapshot.val();
    items = [...items, {...childData,firebaseItemId: key }]
    // console.log(items)
       
});

     //find  the item with same id and size and return the result 
 const item =  items.find((item)=>{
            return   item.id === order.id && item.size === order.size
     
       
    })

//  console.log(item)
 return item
}



export function addOrderToBagActionThunk(order) {
   
    
    return async (dispatch, getState) =>{     

        if(getState().user.name!== 'guest'){
                const uid = getState().user.uid
               
                // check if there is any items in the user items location
            const data =    await database.ref(`/users/${uid}/items`).once("value")

                // console.log(data.exists())
            //     if  user location  not there  for the first time ; push the item to create user location and items location
            // then send item to bag of signed in user in redux
                if(!data.exists()){
                                          
                    const firebaseItemId =    await database.ref(`/users/${uid}/items`).push(order);
              
                    order = {
                        ...order,
                        firebaseItemId: firebaseItemId.key
                    }
             
                    dispatch(addOrderToBagForSignedInUser(order))     

                }

                if(data.exists()){
                    // if yes ; find existing item
                  //   then update the existing item
                    const existingItem =   await findExistingItem(uid, order)
                  //   if not matched then push 
                    if(!existingItem){
                                
                      const firebaseItemId =    await database.ref(`/users/${uid}/items`).push(order);
                      order = {
                        ...order,
                        firebaseItemId: firebaseItemId.key
                    }
             
                    dispatch(addOrderToBagForSignedInUser(order))     
                              

                  
                     
                      // if matched then update the quantity
                    }else{
                      
                           database.ref(`/users/${uid}/items/${existingItem.firebaseItemId}`).update(
                               {
                                   quantity: existingItem.quantity + order.quantity,
                                    price:  existingItem.price + order.price
                                }

                               
                               )
                         
                               dispatch(addOrderToBagForSignedInUser(order)) 
                        }  

              }    

            
              
          
        }else{
            dispatch(addOrderToBag(order))
        }                  

        
    }

}



export function transferOrderToBagActionThunk() {
   
    
    return async (dispatch, getState) =>{     
        // when user switch from guest to sign in 
        //  add the logic here to check exsting item on fire base in item location  then add to it if there is the same one
        // if not push to new location
        // copy some logic from the top to fix it     
       
             const uid = getState().user.uid;
              const items = getState().ordersInBag;
      


        if(getState().user.name!== 'guest' && items.length > 0){
         


                    // check if there is any items in the user items location or the users location even
                    // exists
                    const data =    await database.ref(`/users/${uid}/items`).once("value")



                  //   if  user location  not there  for the first time ;
                //   set the name of user at user document in users collection
                //    then push the item to user document and create items location collection and set the order
            // then send item to bag of signed in user in redux
                if(!data.exists() ){
                    await database.ref(`/users/${uid}`).set({name: getState().user.name})
                 

            //   loop through order items from redux and send order item to firebase 
                    items.forEach(async(item)=>{

                    const firebaseItemId =    await database.ref(`/users/${uid}/items`).push(item);
                     let order = {
                    ...item,
                    firebaseItemId: firebaseItemId.key
                     }
                     dispatch(addOrderToBagForSignedInUser(order)) 
    
                });
               

                }
                
                // if  yes there is data  ; find existing item in firebase  by looping and putting each order item from  redux 
                // 
                if(data.exists()){          
                    
                    items.forEach(async(order)=>{
                        // find exsting item in firebase 
                        let existingItem =   await findExistingItem(uid, order)


                              
                  //   if not matched then push to firebase and 
                //   pull all items from firebase back and 
                //   send order items to redux for signed in user
                    if(!existingItem){

                        //  ****** take care the case when there is no exsting item
                        // may be pull all items from fireebase again then add to redux for signin user
                        // each push will pull whole punch of items
                        // so you are using double loop 
                        // each item in redux will pull whole bunch of item form firebase and 
                        // disptach each one; you will dispatch same item again that already exist in sign in user
                        // in redux

                       
                        await database.ref(`/users/${uid}/items`).push(order);
                        let snapshot =  await database.ref(`/users/${uid }/items`).once("value");
                           
                        snapshot.forEach(function(childSnapshot) {
                        
                        let key = childSnapshot.key;                   
                        let childData = childSnapshot.val();
                        let order  = {...childData,firebaseItemId: key }
                        console.log(order)
                        dispatch(addOrderToBagForSignedInUserFromFirebaseToRedux(order, 'push') ) 
                            
                            });                 
         
                        
                                
  
                    
                       
                        // if matched then update the quantity in firebase 
                        // pull the items in firebase back 
                      //   and send items to  redux for signed in user
                      }else{
                     
                                   await  database.ref(`/users/${uid}/items/${existingItem.firebaseItemId}`).update(
                                 {
                                     quantity: existingItem.quantity + order.quantity,
                                      price:  existingItem.price + order.price
                                  }
  
                                 
                                 )


                             let snapshot =  await database.ref(`/users/${uid }/items`).once("value");
                           
                                snapshot.forEach(function(childSnapshot) {
                                
                                let key = childSnapshot.key;                   
                                var childData = childSnapshot.val();
                                let order  = {...childData,firebaseItemId: key }
                              
                                dispatch(addOrderToBagForSignedInUserFromFirebaseToRedux(order, 'update') ) 
                                    
                                    });

                            
                      }  


                    });




                  
            

              }        
            
        }else{
        
            // check if any name exist 
          
            const data =    await database.ref(`/users/${uid}/name`).once("value")
            if(!data.exists()) database.ref(`/users/${uid}`).set({name: getState().user.name})

            
            // if user sign in for first time and there is no items in redux 
            // then just set name of user at user document at users collection
         
        }
         
    }

}


export function pullAllOrderItemsFirebaseToReduxWhenRefreshThunk() {
   
    
    return async (dispatch, getState) =>{     

        if(getState().user.name!== 'guest'){
                const uid = getState().user.uid
               
                // check if there is any items in the user items location
            const data =    await database.ref(`/users/${uid}/items`).once("value")

  
               

                if(data.exists()){
                    

                    let snapshot =  await database.ref(`/users/${uid }/items`).once("value");
                           
                    snapshot.forEach(function(childSnapshot) {
                    
                    let key = childSnapshot.key;                   
                    var childData = childSnapshot.val();
                    let order  = {...childData,firebaseItemId: key }
                       
                    dispatch(addOrderToBagForSignedInUserFromFirebaseToRedux(order) ) 
                        
                        });
          
              }    

            
              
          
        }           

        
    }

}