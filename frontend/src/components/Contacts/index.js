import React from "react";
import EmailLogo from "../../Assets/Images/email-logo.svg";
import PhoneLogo from "../../Assets/Images/phone-logo.svg";
import LinkedInLogo from "../../Assets/Images/linkedin-logo.svg";
import TwitterLogo from "../../Assets/Images/twitter-logo.svg";
import "./index.css";


function Contacts() {
    return (
        <>
        <div className="contact-container">
            <a href="https://www.linkedin.com/in/konstantinas-mamonas/" target="_blank" className="link">
            <button className="contact">
                <img className="linked-in-picture" src={LinkedInLogo} alt="profile"></img>
                <p className="contact-title">LinkedIn</p>
            </button>
            </a>
            <a href="https://twitter.com/MamonasHimself" target="_blank" className="link">
            <button className="contact">
                <img className="linked-in-picture" src={TwitterLogo} alt="profile"></img>
                <p className="contact-title">Twitter</p>
            </button>
            </a>
        </div>
        <div className="contact-container">
            <button className="contact">
                <img className="linked-in-picture" src={EmailLogo} alt="profile"></img>
                <p className="contact-title">k.mamonas@gmail.com</p>
            </button>
            <button className="contact">
                <img className="linked-in-picture" src={PhoneLogo} alt="profile"></img>
                <p className="contact-title">+37064050566</p>
            </button>
        </div>
        </>
    )
};

export default Contacts