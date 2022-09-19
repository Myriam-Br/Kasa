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
    const logementById = data.find(data =>  data.id === params.logementId)
    
    if(logementById === undefined) {
        return <Navigate replace to="/error" />
    }

    return <div key = {logementById.id} className='Logement'>
        <Galerie props = {logementById.pictures}/>
        <LogementById props = {logementById}/>
        <div className='container'>
            <div className='description'><Collapse section={logementById.description} id ={logementById.id} title = "Description"/></div>
            <div className='equipements'><Collapse section={logementById.equipments} id ={logementById.id} title = "Equipement"/></div>  
        </div>
        
    </div>
}

export default Logement