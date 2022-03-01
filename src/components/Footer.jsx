import React from "react";
import "./Footer.css"

const Footer =()=>{
    var year = new Date().getFullYear();

    return(
        <>
            <div id="mainDivFooter">
                <div id="footerCard">
                    <div id="footer">
                        <div id="footerDiv1">
                                <h2>About Us</h2>
                                Clapingo is a unique platform where you
                                practise conversations live with various
                                speakers across the country. This is a
                                judgment-free space where people can 
                                freely speak with a diverse set of people
                                from different backgrounds.

                                
                            </div>
                        <div id="footerDiv2">dsfgdsfg</div>
                        <div id="footerDiv3">
                                Clapingo is a unique platform where you
                                practise conversations live with various
                                speakers across the country. This is a
                                judgment-free space where people can 
                                freely speak with a diverse set of people
                                from different backgrounds.
                                </div>
                        <div id="footerDiv4">dfgdfg</div>
                    </div>
                    <div id="copyRight">
                        <p>© {year} Aliah University Project Work</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer