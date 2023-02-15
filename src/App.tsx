import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Contact } from './components/routers/Contact';
import { Home } from './components/routers/Home';
import { Navigation } from './components/navigation/Navigation';
import { Shop } from './components/routers/Shop';
import { SignIn } from './components/routers/SignIn';

// import './App.scss';



function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element ={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='shop' element= {<Shop/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='sign-in' element= {<SignIn/>}/>
     
    </Route>
   
   </Routes>
    </div>
  );
}

export default App;
