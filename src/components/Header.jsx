import React from "react"
import "./styles/header.css"
import { Link } from 'react-router-dom'
import Logo from '../components/assets/logo.png'


function Header() {
  
    return <header>
        <img src={Logo} alt="Logo"></img>
        <nav className="links">
          <Link to="/">ACCUEIL</Link>
          <Link to="/apropos">A PROPOS</Link>
        </nav>
    </header>
}

export default Header