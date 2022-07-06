import React from "react";
import EmailLogo from "../../Assets/Images/email-logo.svg";
import PhoneLogo from "../../Assets/Images/phone-logo.svg";
import LinkedInLogo from "../../Assets/Images/linkedin-logo.svg";
import TwitterLogo from "../../Assets/Images/twitter-logo.svg";
import "./index.css";


function Contacts() {
    return (
        <div className="contact-container">
            <div className="contact">
                <img className="linked-in-picture" src={EmailLogo} alt="profile"></img>
                <p className="contact-title">Gmail</p>
            </div>
            <div className="contact">
                <img className="linked-in-picture" src={PhoneLogo} alt="profile"></img>
                <p className="contact-title">Mobile</p>
            </div>
            <div className="contact">
                <img className="linked-in-picture" src={LinkedInLogo} alt="profile"></img>
                <p className="contact-title">LinkedIn</p>
            </div>
            <div className="contact">
                <img className="linked-in-picture" src={TwitterLogo} alt="profile"></img>
                <p className="contact-title">Twitter</p>
            </div>
        </div>
    )

};

export default Contacts