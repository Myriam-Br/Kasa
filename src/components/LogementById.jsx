import React from "react";
import "../components/styles/logement.css"
import Rating from "./Rating";

function LogementById({props}) {

    return <div className="section_logement">
        <div className="title_location">
            <h2>{props.title}</h2>
            <p>{props.location}</p>
        </div>
        <div className="profil_host">
            <p>{props.host.name}</p>
            <img src = {props.host.picture} alt={props.host.name}></img>
            <Rating props={props.rating}/>
        </div>
    </div> 
}

export default LogementById