
import { initializeApp } from "firebase/app";
import{
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';


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
