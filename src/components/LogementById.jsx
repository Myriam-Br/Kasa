import React from "react";
import "../components/styles/logement.css"
import Rating from "./Rating";
import Tags from '../components/Tags'

function LogementById({props}) {

    return <div className="section_logement">
        <div className="title_location">
            <h2>{props.title}</h2>
            <p>{props.location}</p>
            <Tags props ={props.tags}/>
        </div>
        <div className="profil_host">
            <p> {props.host.name}</p>
            <img className="host_pic" src = {props.host.picture} alt={props.host.name}/>    
        </div>
        <Rating props={parseInt(props.rating)}/>
    </div> 
}

export default LogementById