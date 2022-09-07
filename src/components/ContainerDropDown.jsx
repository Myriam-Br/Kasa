import React, {useState} from "react";
import vectorUp from "../components/styles/images/vectorup.png"
import vectorDown from "../components/styles/images/vectordown.png"

function ContainerDropDown({title, section}) {

    if(typeof section === 'string') {
        console.log('make a tab');
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

export default ContainerDropDown