import React, {useState} from "react";
import iconNext from "../components/styles/images/vectornext.png"
import iconPrevious from "../components/styles/images/vectorprev.png"
import "./styles/logement.css"

function ModalPhoto ({props}) {
    const imagesData = props
    const [current, setCurrent] = useState(0)
    const length = imagesData.length

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    function previousSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(imagesData.length <= 0) {
        return null
    }

    
    return(
    <div className="modal image_logement">   
        {imagesData.map((slide, index) => {
            
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide} alt="logement" className="current_slie"/>  
                    )}
                </div>
            )  
        })}

        <img src={iconNext} alt="next slide" onClick={nextSlide} className="next"/>
        <img src={iconPrevious} alt="previous slide" onClick={previousSlide}  className="previous"/>
    </div>)

}

export default ModalPhoto