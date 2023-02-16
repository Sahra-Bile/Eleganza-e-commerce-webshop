
import { initializeApp } from "firebase/app";
import{
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {

doc,
getDoc
,setDoc,
getFirestore
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCbEuweP1ejEGzx2Uv8QtOXOPTLHxGCWTk",
  authDomain: "crwn-clothing-db-d9225.firebaseapp.com",
  projectId: "crwn-clothing-db-d9225",
  storageBucket: "crwn-clothing-db-d9225.appspot.com",
  messagingSenderId: "596595659998",
  appId: "1:596595659998:web:4e2c88036af63355d61e4f"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth:any)=>{
  if(!userAuth) return;

  const userDocRef = doc(db ,'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  

  //* if user data does not exist 
  //* create/set  the document with the data from userAuth in my collection
  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createAt = new Date();

    try{
    await setDoc(
      userDocRef,{ 
      displayName,
      email,
      createAt
    });
    }catch(error){
    console.log("error creating the user")  
    }
  }
  //*if user exist return user 
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email:string,password:string)=>{

if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password)
};
