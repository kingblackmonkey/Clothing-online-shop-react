const addUpOrders = (oldOrders,newOrder)=>{
  let itemFound = '';
  
  itemFound =   oldOrders.find((item)=>{
        return item.id === newOrder.id && item.size === newOrder.size
 })

if(itemFound){
  return  oldOrders.map((item)=>{
        if(item.id === newOrder.id && item.size === newOrder.size){
            return {
                ...item, price: item.price + newOrder.price, quantity: item.quantity + newOrder.quantity
            }
        }else{
            return item
        }
    })
}else{
    return [...oldOrders, newOrder]
}

}

export default addUpOrders