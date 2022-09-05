import React from "react";
import { useState } from "react";

function ContainerDescription({props, id, title}) {
    const [showParagraphe, setShowParagraphe] = useState(true)

    function handleClick(){
        setShowParagraphe(current => !current);
    };
    
    return (
    <div key= {id} style = {{backgroundColor : showParagraphe ? '#F7F7F7' : 'transparent'}} className="container_drop_down description">
        <h3>{title}<span onClick={handleClick} >+</span></h3>
        <p className="text" style = {{display : showParagraphe ? 'block' : 'none'}}>{props}</p>
    </div>
    );
}

export default ContainerDescription