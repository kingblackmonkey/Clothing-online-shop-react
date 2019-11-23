export const filter =(byPrice)=>{
    return {
        type: "SET_FILTER",
        byPrice
    }
}

export const filterDefault = ()=>{
    return {
        type: "SET_FILTER_DEFAULT",
       filterDefault: ''
    }
}