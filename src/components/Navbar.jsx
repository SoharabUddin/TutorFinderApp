import React from "react";
import {BiAlignLeft} from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <>
            <nav className="navbar">
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                <BiAlignLeft  className="fas fa-bars"/>
                </label>
                <label class="logo" onClick={()=>{
                    window.location = "/home";
                }}>TutorFinder</label>
                <ul>
                    <li><Link to="/home" className="active">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Tutors">For Tutors</Link></li>
                    <li><Link to="/contact">contact Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar