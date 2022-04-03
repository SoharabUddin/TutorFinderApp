import React, { Component,useState } from 'react'
import Classes from "../Styles/TutorSignUp.module.css"
import Select from 'react-select'
const TutorSignUp = ()=>{

  const myComponentStyle = {
    lineHeight: 10,
    height:30,
    borderRadius: '0px 12px',
    width:320,
    marginLeft:20,
    fontSize:'20px',
 }


    const options = [
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'English', label: 'English' },
        { value: 'Chemistry', label: 'Chemistry' }]
        const options2=[{value:'female', label:'Female'},{value:'male', label:'Male'}]

        const [select,setSelect] = useState("");

        const [user,setUser] = useState([{
          name:'', email:'',password:'', cpassword:'' 
        }]);

        const handleInputs = (e) => {
          setUser({...user, [e.target.name]:e.target.value});
        };
    

        const handleChange=(e)=>{
          setSelect({value: e.target.value});
        }
    return(
        <>
            <div className={Classes.forNavbar}></div>
    <div className={Classes.finalDiv}>
      <div className={Classes.forSignup}>
          <h1>Create Profile</h1>
        <form method='POST'>
          
          <input type ="text"
          value={user.name}
          onChange={handleInputs}
          name="name"
          placeholder="Enter your full name" />

          <input type ="mail" 
          value={user.email}
          onChange={handleInputs} 
          name="email"
          placeholder="Enter your E-mail"/>
          
          <input type ="mail" 
          value={""}
          onChange={""} 
          name="email"
          placeholder="Enter your E-mail"/>

          <input type ="mail" 
          value={""}
          onChange={""} 
          name="email"
          placeholder="Enter your E-mail"/>

         <input type ="mail" 
          value={""}
          onChange={""}
          name="email"
          placeholder="Enter your mobile number"/>
          
          <select style={myComponentStyle} value={select.value} onChange={handleChange}>
              <option value="Math" label="Math"/>
              <option value="Eng">Eng</option>
              <option value="his">His</option>
              <option value="phy">Phy</option>
          </select>
         

        <input type ="mail"
          value={""}
          onChange={""}
          name="email"
          placeholder="Enter your E-mail"/>

        <input type ="mail"
          value={""}
          onChange={""}
          name="email"
          placeholder="Enter your E-mail"/>

          <input type ="password"
          value={""}
          onChange={""}
          name="password"
          placeholder="Enter Password" />

          <input type ="password" 
           value={""}
          onChange={""}
          name="cpassword"
          placeholder="Conform Password"/>

          <input type='submit' name="signup"  
         value='Register' onClick={""} className={Classes.forsubmitButton}/>

        </form>
        
      </div> 
    </div> 
        </>
    )
}
export default TutorSignUp