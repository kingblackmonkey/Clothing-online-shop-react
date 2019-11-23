import database from './firebase'
import SHOP_DATA from './data/data'

const addData = (products)=>{

    for (const key in products) {
              database.ref('/products').push(products[key])
    }
  
}

