import React from "react";
import MyImage from "../../Assets/Images/profile_picture.jpg";
import "./index.css";

function Picture() {
    return (
        <div className="pic-container">
            <img className="profile" src={MyImage} alt="profile"></img>
        </div>
    )

};

export default Picture