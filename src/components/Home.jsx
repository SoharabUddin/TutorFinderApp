import React from "react";
import Classes from "../Styles/Home.module.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home =()=>{
    return(
        <>
           
            <div id={Classes.mainDivHome}>
                <div id={Classes.searchBoxHome}>
                    <div id={Classes.searchInput}>
                        <h1>Join Live and Interactive
                            Online Classes with the best Tutors
                        </h1>
                        <input type="text" placeholder="Search here..."/>
                        <button style={{cursor:"pointer"}}>Search</button>
                    </div>
                </div>
                <div id={Classes.exploreCategoryHome}>Explore Category</div>
                <div id={Classes.howTFWorks}>How tutor finder Works</div>
                <div id={Classes.reviewsHome}>Reviews from Student</div>
            </div>
        </>
    )

}
export default Home 

