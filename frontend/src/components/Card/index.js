import React from "react";
import "./index.css";


function Card(props) {

    const img = props.img
    const title = props.title
    const text = props.text

    return(
        <div className="card">
            <img src={img} />
            <div className="card-body">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card
