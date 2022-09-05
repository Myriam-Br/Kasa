import React from "react"
import "./styles/footer.css"
import logo from "./assets/logodark.png"
import copyright from "./assets/copyright.png"

function Footer() {
    return <footer>
        <img src={logo} alt="logo" className="logo"></img>
        <img src={copyright} alt="copyright" className="copyright"></img>
    </footer>
}

export default Footer