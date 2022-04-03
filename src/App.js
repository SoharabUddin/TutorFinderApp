import React from 'react';
import "./App.css";
import {Route,Routes} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About"
import Contact from './components/Contact';
import Error from './components/Error';
import Signup from './components/Signup';
import TutorSignUp from './components/TutorSignUp';
import OutlinedCard from './components/Card';


const App=()=>{
    return(
      <>
      <Navbar/>
      {/* <OutlinedCard/> */}
      {/* <TutorSignUp/>  */}
      {/* <Signup/> */}
      <Routes> 
        <Route path="/About" element={<About/>} /> 
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/" element={<Home/>} /> 
        <Route path="/register" element={<Signup/>} /> 
        <Route path="*" element={<Error/>} /> 
        <Route path="/tutorsignup" element={<TutorSignUp/>} /> 
        <Route path="/tutordata" element={<OutlinedCard/>} /> 
        
      </Routes> 
      </>
    )
}
export default App; 