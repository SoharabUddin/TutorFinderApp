import React from "react";
import "./Home.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home =()=>{
    return(
        <>
           
            <div id="mainDivHome">
                <div id="searchBoxHome">
                    <div id="searchInput">
                        <h1>Join Live and Interactive
                            Online Classes with the best Tutors
                        </h1>
                        <input type="text" placeholder="Search here..."/>
                        <button style={{cursor:"pointer"}}>Search</button>
                    </div>
                </div>
                <div id="exploreCategoryHome">Explore Category</div>
                <div id="howTFWorks">How tutor finder Works</div>
                <div id="reviewsHome">Reviews from Student</div>
            </div>
            <p > This is P</p>
        </>
    )

}
export default Home 

