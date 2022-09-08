import React from 'react'
import LogementById from '../components/LogementById'
import Collapse from '../components/Collapse'
import '../components/styles/containerDropDown.css'
import '../components/styles/logement.css'
import Galerie from '../components/Galerie'
import { useParams } from "react-router-dom";
import data from '../data.json'
import { Navigate } from 'react-router-dom';

//get by id
function Logement() {
    const params = useParams()
    const userId = data.filter(data =>  data.id === params.userId)

    if(userId[0] === undefined) {
        return <Navigate replace to="/error" />
    }

    return <div key = {userId[0].id} className='Logement'>
        <Galerie props = {userId[0].pictures}/>
        <LogementById props = {userId[0]}/>
        <div className='container'>
            <div className='description'><Collapse section={userId[0].description} id ={userId[0].id} title = "Description"/></div>
            <div className='equipements'><Collapse section={userId[0].equipments} id ={userId[0].id} title = "Equipement"/></div>  
        </div>
        
    </div>
}

export default Logement