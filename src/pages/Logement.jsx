import React from 'react'
import Tags from '../components/Tags'
import LogementById from '../components/LogementById'
import ContainerDescription from '../components/ContainerDescription'
import ContainerEquipement from '../components/ContainerEquipement'
import '../components/styles/containerDropDown.css'
import ModalPhoto from '../components/ModalPhoto'


//get by id
function Logement() {
    const logement = JSON.parse(localStorage.getItem('id'))[0]
    

    return <div key = {logement.id} className='Logement'>
        <ModalPhoto props = {logement.pictures}/>
        <LogementById props = {logement}/>
        <Tags props ={logement.tags}/>
        <div className='containers'>
            <ContainerDescription props={logement.description} id ={logement.id} title = "Description"/>
            <ContainerEquipement props={logement.equipments} id ={logement.id} title = "Equipement"/>
        </div>
    </div>
}

export default Logement