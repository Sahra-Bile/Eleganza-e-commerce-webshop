import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase';
import { SignUpForm } from './SignUpForm';


export const SignIn = ()=>{
  const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
  }

  return( <>
  
  here you can sign in and buy you products
  <button onClick={logGoogleUser}>sign in with google popup</button>
  <SignUpForm/>
  </>
  )
}
