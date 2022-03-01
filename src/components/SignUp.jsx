
// logo
// User name(Enter Namer)
// Mail 
// Password 
// Re-password 
// Submit Button (Create Account)
import React  from "react";
// import "./SignUp.css";

const SignUp =()=>{
    return(
        <>
        <div className="ForNav"></div>
        <div className="mainDiv">
            <div class="container">
                <h1 className="shadows">Login</h1> 
            </div>
            <div className="loginDiv">
                <form>
                <input type="text" class="form__input" id="name"
                     placeholder="Enter Your Name" required="" />
                <label for="name" class="form__label">Enter Your Name</label>
                <input type="password" class="form__input" id="name"   
                    placeholder="Password" required="" />
                <label for="name" class="form__label">Password</label>
                </form>
                <div className="btnDiv">
                    <span><a href="#"></a></span>
                </div>
            </div>
        </div>
        
        </>
        
    )
}
export default SignUp