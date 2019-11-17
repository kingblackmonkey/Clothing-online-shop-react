  // Your web app's Firebase configuration
  
  import * as firebase from "firebase/app";

// Add the Firebase products that you want to use

import "firebase/database";
  
var firebaseConfig = {
  apiKey: "AIzaSyDLixnWmoL8pQ3Mu_ZjxUMdLUIRvuysHgA",
  authDomain: "andy-clothing.firebaseapp.com",
  databaseURL: "https://andy-clothing.firebaseio.com",
  projectId: "andy-clothing",
  storageBucket: "andy-clothing.appspot.com",
  messagingSenderId: "272642219026",
  appId: "1:272642219026:web:39912d32dbbc3266f80ccb",
  measurementId: "G-CNDYXE1ZHD"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database= firebase.database();






export default database;