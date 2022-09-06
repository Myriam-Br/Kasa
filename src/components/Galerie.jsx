import React from "react"
import "./styles/galerie.css"
import { Link } from "react-router-dom"

function Galerie({props}) {
  const data = props
  return (
    <ul className="galerie_container">
      {data.map((data) => {
      return <Link key={data.id} to={`/logement/${data.id}`} className="logement_card"><li><p>{data.title}</p></li></Link>
      })}
    </ul>
  );
}

export default Galerie