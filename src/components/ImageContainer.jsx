import React from 'react'
import "./styles/imagecontainer.css"
import BackgroundImage from '../components/BackGroundImage';
import image from "../components/images/homeBGImage.png"

function ImageContainer() {
    return <div className='image_container'>
        <BackgroundImage source={image} alt ="green mountains"/>
        <p>Chez vous, partout et ailleurs</p> 
    </div>
}

export default ImageContainer