import React, {useState, useEffect} from "react";
import iconNext from "../components/images/vectornext.png"
import iconPrevious from "../components/images/vectorprev.png"
import "./styles/logement.css"

function Galerie ({props}) {
    const imagesData = props
    const [current, setCurrent] = useState(0)
    const[showArrows, setShowArrows ] = useState(true)
    const length = imagesData.length

    useEffect(() => {
        if(length === 1) {
            setShowArrows(false)
        } 
    }, [length])

    if(length <= 0) {
        return null
    }
    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    function previousSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1)
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

        <img src={iconNext} style={{display : showArrows ? 'block' : 'none'}} alt="next slide" onClick={nextSlide} className="next"/>
        <img src={iconPrevious} style={{display : showArrows ? 'block' : 'none'}} alt="previous slide" onClick={previousSlide}  className="previous"/>
    </div>)

}

export default Galerie