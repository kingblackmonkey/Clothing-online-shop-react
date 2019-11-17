import database from '../../firebase/firebase'


const addProductAction = (products)=>{
    return {
        type: "ADD_PRODUCTS",
        products
     }
}


export function addProductActionThunk() {
   
    
    return async (dispatch) =>{     
          
      await database.ref(`/products`).once('value');

        const products = {}
          const  snapShot =  await database.ref(`/products`).once('value');
           const data = snapShot.val(); 
          for (const key in data) {
              products[data[key].routeName]= {...data[key]}
          }
     
          dispatch(addProductAction(products))
        
    }

}