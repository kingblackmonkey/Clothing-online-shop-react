export const  signUserIn =(name, uid)=>{
    return {
        type: "SIGN_USER_IN",
       user:{
           name,
           uid
       }
    }
}

export const  signUserOut =()=>{
    return {
        type: "SIGN_USER_OUT",
        user:{name: 'guest'}
    }
}