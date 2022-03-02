import React  from "react";
import Classes from "../Styles/Login.module.css";

const Login =()=>{
    return(
        <>
        <div className={Classes.ForNav}></div>
        <div className={Classes.mainDiv}>
            <div className={Classes.container}>
                <h1 className={Classes.shadows}>Login</h1> 
            </div>
            <div className={Classes.loginDiv}>
                <form>
                <input type="text" className={Classes.form__input} id="name"
                     placeholder="User Name" required="" />
                <label for="name" className={Classes.form__label}>User Name</label>
                <input type="password" className={Classes.form__input} id="name"   
                    placeholder="Password" required="" />
                <label for="name" className={Classes.form__label}>Password</label>
                </form>
                <div className={Classes.btnDiv}>
                    <span><a href="#"></a></span>
                </div>
            </div>
        </div>
        
        </>
        
    )
}
export default Login