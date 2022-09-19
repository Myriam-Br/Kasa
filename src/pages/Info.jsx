import React from "react";
import "../components/styles/containerDropDown.css"
import "../components/styles/info.css"
import Collapse from "../components/Collapse";
import image from "../components/images/aproposBackground.png"
import BackgroundImage from "../components/BackGroundImage";

function Info() {
    const fiabilité = [
    "Fiabilité", 
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    ]

    const respect = [
        "Respect",
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    ]

    const service = [
        "Service",
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    ]

    const security = [
        "Sécurité",
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    ]

    const infos = [ fiabilité , respect, service, security]

    return <div className="Info">
            <BackgroundImage source={image} alt ='mountains'/>
            {infos.map((info) => {
                return <Collapse key={info[0]}  title = {info[0]} section={info[1]}/>
            })}
    </div>;
}

export default Info;