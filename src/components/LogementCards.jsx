import React from "react"
import "./styles/galerie.css"
import { Link } from "react-router-dom"

function Card({props}) {

  return (
    <ul className="galerie_container">
      {props.map((data) => {
      return <Link key={data.id} to={`/logement/${data.id}`} className="logement_card">
          <li>
            <img src={data.cover} alt="logement cover"/>
            <p>{data.title}</p> 
          </li>       
        </Link>
      })}
    </ul>
  );
}

export default Card