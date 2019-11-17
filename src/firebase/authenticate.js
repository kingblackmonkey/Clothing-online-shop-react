
  
import * as firebase from "firebase/app";
import "firebase/auth";




export const authenticate = ()=>{
let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
}

export const signOut = ()=>{ 
    firebase.auth().signOut();
    }


