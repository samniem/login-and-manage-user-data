import './../App.css'
import { useState } from 'react'


const FormField = ({name, data, key}) => {
    return <div className="GridDiv">
        <label className="GridBlock">{name}</label>
        <input type="text" value={data}></input>
    </div>
}

const FormNotes = () => {
    return <div className="GridDiv">
            <label  className="GridBlock">Notes</label>
            <textarea rows="3" cols="55"/>
        </div>
}

const FormSend = () => {
    return <div className="UpdateDiv" >
            <input className="Button" type="button" value={"Update"}></input>
            </div>
}

const defaultUser = {
    firstname: 'Jaska',
    lastname: 'Avaruus',
    alias: 'Reckoning',
    phone: '+99901010101',
    email: 'test@test.test',
    vr_user: 'ReckoningHost',
    address: 'Mound Street 1',
    base: 'Dark Side',
    planet: 'Mars',
    position: 'Exploration Specialist',
    department: 'Mars Exploration',
    manager: 'Norr Guldrop',
    notes: ''
}

const Form = () => {

    const [formData, updateFormData] = useState(defaultUser)

    return <form className="Form">
            <div className="FormGrid">
                <FormField name="Firstname" data={formData.firstname} key='firstname'/>
                <FormField name="Lastname" data={formData.lastname} key='lastname'/>
                <FormField name="Alias" data={formData.alias} key='alias'/>
                <FormField name="Phone" data={formData.phone} key='phone'/>
                <FormField name="Email" data={formData.email} key='email'/>
                <FormField name="VR User" data={formData.vr_user} key='vr_user'/>
                <FormField name="Address" data={formData.address} key='address'/>
                <FormField name="Base" data={formData.base} key='base'/>
                <FormField name="Planet" data={formData.planet} key='planet'/>
                <FormField name="Position" data={formData.position} key='position'/>
                <FormField name="Department" data={formData.department} key='department'/>
                <FormField name="Manager" data={formData.manager} key='manager'/>
            </div>
            <div className="FormBottomGrid" >
                <FormNotes data={formData.notes} key='notes'/>
                <FormSend />
            </div>
        </form>
}

export const FormContainer = ({userName}) => {
    return <div className="Container" style={{"width": "900px"}}>
        <h2>{userName}</h2>
        <Form />
    </div>
}