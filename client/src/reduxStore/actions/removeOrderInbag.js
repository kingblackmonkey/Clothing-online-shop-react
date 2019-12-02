
import database from '../../firebase/firebase'
export  const removeOrderForGuest = (id,size)=>{
    return {
            type: 'REMOVE_ITEM_FOR _GUEST',
            id,
            size
    }
}

 const removeOrderForSignedInUser = (firebaseItemId )=>{
    return {
            type: 'REMOVE_ITEM_FOR _SIGN_IN_USER',
            firebaseItemId 
           
    }
}

export const removeOrderForSignedInUserThunk=(firebaseId)=>{
        return async(dispatch, getState)=>{
            const userid = getState().user.uid
            await database.ref(`/users/${userid}/items/${firebaseId}`).remove();
            dispatch(removeOrderForSignedInUser(firebaseId ) )
        }
}