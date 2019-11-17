
const runSortProducts = (products,sortByPrice) =>{

products.sort((a,b)=>{
          if(sortByPrice==='low-to-high'){
              return    a.price - b.price 
          }else{
              return b.price - a.price
          }
    })  

  return products  
}
  



export const filterProducts = (products, sortByPrice)=>{
   
   if(!sortByPrice) return products
   
   return  runSortProducts(products,sortByPrice)
    
}
