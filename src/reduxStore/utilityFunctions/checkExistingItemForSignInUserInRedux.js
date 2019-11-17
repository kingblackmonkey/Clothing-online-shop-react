const checkExistingItemForSignInUserInRedux = (items, itemFromFirebase,  pushOrUpdate)=>{

if(pushOrUpdate === 'push'){

    let result =    items.find((item)=>{
        return item.firebaseItemId === itemFromFirebase.firebaseItemId;
    });

    if(result){

        return items
    }else{
   
        return [...items, itemFromFirebase]
    }
}else if(pushOrUpdate === 'update'){
    
        return items.map((item)=>{
            if(item.firebaseItemId === itemFromFirebase.firebaseItemId) return itemFromFirebase;
            else return item
        })

}else{
    return [...items, itemFromFirebase]
}



}

export default checkExistingItemForSignInUserInRedux