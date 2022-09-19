import React from "react";
import etoileVide from "../components/images/etoilevide.png"
import etoileOrange from "../components/images/etoilefull.png"

function Rating({props}) {
    
    return <div className="rating">  
            {[...Array(props)].map((star, index) => {
                return <img key={index} src={etoileOrange} alt='stars'/>
            })} 
            {[...Array(5-props)].map((star, index) => {
                if(5-props === 0) {
                    return null
                }
                return <img key={index} src={etoileVide} alt='stars'/>           
            })} 
    </div>
}

export default Rating