import React, {useState} from "react";
import vectorUp from "../components/images/vectorup.png"
import vectorDown from "../components/images/vectordown.png"

function Collapse({title, section}) {

    if(typeof section === 'string') {
        section = [section]
    }
    
    const [showParagraphe, setShowParagraphe] = useState(false)

    function handleClick(){
        setShowParagraphe(current => !current);
    };
    return (
    <div key= {title} className="container_drop_down">
        <h3>{title}<span onClick={handleClick}>
            <img className="vector" src={vectorDown} alt="closed" style = {{display : showParagraphe ? 'block' : 'none'}}/>
            <img className="vector" src={vectorUp} alt="open" style = {{display : showParagraphe ? 'none' : 'block'}}/>
        </span></h3>
        <ul style = {{display : showParagraphe ? 'block' : 'none'}}>
                {section.map(element => {
                    return <li key={element}>{element}</li>
                })}
        </ul>
    </div>
    );
}

export default Collapse