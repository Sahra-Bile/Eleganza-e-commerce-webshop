import{signInWithGooglePopup} from '/Users/sahra/PROJEKT/e-commerce-shopp/src/utils/firebase/firebase'

export const SignIn = ()=>{
  const logGoogleUser = async ()=>{
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return( <>
  
  here you can sign in and buy you products
  <button onClick={logGoogleUser}>sign in with google popup</button>
  </>
  )
}
