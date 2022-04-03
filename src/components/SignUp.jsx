import React, {useState} from "react";
import Classes from "../Styles/Signup.module.css";
import { NavLink, useNavigate } from "react-router-dom";


const Signup = ()=>{

    const [user,setUser] = useState([{
      name:'', email:'',password:'', cpassword:'' 
    }]);

    const navigate = useNavigate();
  
    const handleInputs = (e) => {
      setUser({...user, [e.target.name]:e.target.value});
    };

    const postData = async (e) => {
      e.preventDefault();
      const {name, email,password, cpassword} = user;

      const res = await fetch('/register',{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name, email,password, cpassword
        }),
      });

      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("Invalid Registration");
      }else{
        window.alert("Registration sucessfull");
        navigate('/login')
      }

    };


return(
  <>
    <div className={Classes.forNavbar}></div>
    <div className={Classes.finalDiv}>
      <div className={Classes.forSignup}>
        <form method='POST'>
          
          <input type ="text"
          value={user.name}
          onChange={handleInputs}
          name="name"
          placeholder="Enter Name" />

          <input type ="mail" 
          value={user.email}
          onChange={handleInputs}
          name="email"
          placeholder="Enter E-mail"/>

          <input type ="password"
          value={user.password}
          onChange={handleInputs}
          name="password"
          placeholder="Enter Password" />

          <input type ="password" 
           value={user.cpassword}
          onChange={handleInputs}
          name="cpassword"
          placeholder="Conform Password"/>

          <input type='submit' name="signup"  
         value='register' onClick={postData} />

        </form>
      </div> 
    </div> 
  </>

);
}
export default Signup