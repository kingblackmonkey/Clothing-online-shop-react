
import database from '../../firebase/firebase'
export  const updateOrderForGuest = ({id,size, oldSize,quantity,price})=>{
    return {
            type: 'UPDATE_ITEM_FOR _GUEST',
            id,
            size,
            oldSize,
            quantity,
            price
    }
}

 const updateOrderForSignedInUser= (firebaseItemId, quantity, price,size )=>{
    return {
            type: 'UPDATE_ITEM_FOR _SIGN_IN_USER',
            firebaseItemId,
            quantity,
            price ,
            size
           
    }
}

export const  updateOrderForSignedInUserThunk=({id, quantity, price,size})=>{
        return async(dispatch, getState)=>{
            const userid = getState().user.uid
            await database.ref(`/users/${userid}/items/${id}`).update({quantity,price,size});
            dispatch(updateOrderForSignedInUser(id,quantity,price,size ) )
        }
}