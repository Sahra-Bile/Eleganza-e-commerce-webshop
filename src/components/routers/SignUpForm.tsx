import{ChangeEvent, FormEvent, Fragment, useState} from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';

const defualtFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export const SignUpForm = () =>{

  const [formFields, setFormFields] = useState(defualtFormFields);

  const {displayName,email,password,confirmPassword} = formFields;

  console.log(formFields);
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
  
    setFormFields({ ...formFields, [e.target.name]: [e.target.value] });

  }
  
  const handleSubmit =  async(event:FormEvent) =>{
  event.preventDefault();
  if(password !== confirmPassword){
    alert('passwords does not match');

    return;
  } 
  
  try{
 const response = await createAuthUserWithEmailAndPassword(email,password);
 console.log(response);
  }catch(error){
    console.log('user creaion encountered an error', error);

  }
  }


  return(
  <Fragment>

    <h1>sign upp with your email and password</h1>

    <form onSubmit={handleSubmit}>

      <label>Display Name:</label>
    
      <input type="text" 
      name="displayName" 
      required 
      value={formFields.displayName} 

      onChange={handleChange}/>

      <label>Email:</label>

      <input type="email"
       name="email" 
       required 
       value={formFields.email}

        onChange={handleChange}/>

      <label>Password:</label>
      <input type="password"
       name="password"
        required
         value={formFields.password}

          onChange={handleChange}/>

      <label>Confirm Password:</label>
      <input type="password"
       name="confirmPassword"
        required 
        value={formFields.confirmPassword}

         onChange={handleChange}/>

      <button type='submit'>Sign Up</button>
    </form>
  </Fragment>)
}
