import React from "react"
import "./styles/galerie.css"
import { Link } from "react-router-dom"

function Galerie({props}) {
  const data = props

  function handleStorage(id) {
    const logement = data.filter(logement => logement.id === id)
    localStorage.setItem('id', JSON.stringify(logement))
  }

  return (
    <ul className="galerie_container">
      {data.map((data) => {
      return <Link key={data.id} to="/logement" className="logement_card" onClick={() => handleStorage(data.id)}><li><p>{data.title}</p></li></Link>
      })}
    </ul>
  );
}

export default Galerie