import React, {useState} from "react";

function ContainerDropDown({props}) {
    const [showParagraphe, setShowParagraphe] = useState(false)

    function handleClick(){
        setShowParagraphe(current => !current);
    };
    return (
    <div key= {props[0]} className="container_drop_down">
        <h3>{props[0]}<span onClick={handleClick}>+</span></h3>
        <p style = {{display : showParagraphe ? 'block' : 'none'}}>{props[1]}</p>
    </div>
    );
}

export default ContainerDropDown