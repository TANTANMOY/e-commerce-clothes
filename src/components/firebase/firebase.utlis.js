import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVs0OJg3ci3l0gGloOYU2muQlogohF9E0",
  authDomain: "ecommerce-cloth-2e365.firebaseapp.com",
  databaseURL: "https://ecommerce-cloth-2e365.firebaseio.com",
  projectId: "ecommerce-cloth-2e365",
  storageBucket: "ecommerce-cloth-2e365.appspot.com",
  messagingSenderId: "429611310826",
  appId: "1:429611310826:web:8d9002ff1bb98c688c0193"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
 const userRef =firestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userRef.get();
 
 if(!snapShot.exists){
   const {displayName, email} = userAuth;
   const createAt = new Date();
   try {
await userRef.set({
  displayName,
  email,
  createAt,
  ...additionalData
})
   }
   catch (error){
console.log('error creating user', error.message)
   }
 }
 return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
