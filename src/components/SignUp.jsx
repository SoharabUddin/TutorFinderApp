
// logo
// User name(Enter Namer)
// Mail 
// Password 
// Re-password 
// Submit Button (Create Account)
import React  from "react";
import Classes from  "../Styles/SignUp.module.css";

const SignUp =()=>{
    return(
        <>
        <div className={Classes.ForNav}></div>
        <div className={Classes.mainDiv}>
            <div className={Classes.container}>
                <h1 className={Classes.shadows}>SignUp</h1> 
            </div>
            <div className={Classes.signUpDiv}>
                <form>
                <input type="text" className={Classes.form__input} id="name"
                     placeholder="Enter Your Name" required="" /><br/>
                     <label for="name" className={Classes.form__label}>Enter Your Name</label>
                <input type="email" className={Classes.form_label} id="mail"
                    placeholder="Enter Your mail" required=""/> <br/>
                <label for="name" className={Classes.form__label}>Enter Your Mail</label>
                <input type="password" className={Classes.form__input} id="name"   
                    placeholder="Password" required="" /><br/>
                <label for="name" className={Classes.form__label}>Password</label>
                </form>
                <div className={Classes.btn2Div}>
                    
                </div>
            </div>
        </div>
        
        </>
        
    )
}
export default SignUp