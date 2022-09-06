import React from 'react'
import Tags from '../components/Tags'
import LogementById from '../components/LogementById'
import ContainerDescription from '../components/ContainerDescription'
import ContainerEquipement from '../components/ContainerEquipement'
import '../components/styles/containerDropDown.css'
import ModalPhoto from '../components/ModalPhoto'
import { useParams } from "react-router-dom";
import data from '../data.json'

//get by id
function Logement() {
    const params = useParams()
    const userId = data.filter(data =>  data.id === params.userId)

    return <div key = {userId[0].id} className='Logement'>
        <ModalPhoto props = {userId[0].pictures}/>
        <LogementById props = {userId[0]}/>
        <Tags props ={userId[0].tags}/>
        <div className='containers'>
            <ContainerDescription props={userId[0].description} id ={userId[0].id} title = "Description"/>
            <ContainerEquipement props={userId[0].equipments} id ={userId[0].id} title = "Equipement"/>
        </div>
    </div>
}

export default Logement