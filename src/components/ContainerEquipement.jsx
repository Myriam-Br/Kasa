import React, {useState} from "react";

function ContainerEquipement({props, id, title}) {
    const [showParagraphe, setShowParagraphe] = useState(true)

    function handleClick(){
        setShowParagraphe(current => !current);
    };
    return (
    <div key= {id} style = {{backgroundColor : showParagraphe ? '#F7F7F7' : 'transparent'}} className="container_drop_down equipement">
        <h3>{title}<span onClick={handleClick}>+</span></h3>
        <ul style = {{display : showParagraphe ? 'block' : 'none'}}>
            {props.map(equipement => {
                return <li key={equipement}>{equipement}</li>
            })}
        </ul>
    </div>
    );
}

export default ContainerEquipement