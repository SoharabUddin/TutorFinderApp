import React from 'react';
import {Route,Routes} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About"
import Contact from './components/Contact';
import Error from './components/Error';
import SignUp from './components/SignUp';


const App=()=>{
    return(
      <>
      {/* <Navbar/> */}
      <SignUp/>
      {/* <Routes> 
        <Route path="/About" element={<About/>} /> 
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route  path="*" element={<Error/>} /> 
        
      </Routes>  */}
      </>
    )
}
export default App; 