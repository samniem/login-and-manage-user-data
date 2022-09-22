import './../App.css'
import { useState } from 'react'

let defaultUser = {
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

const FormField = ({name, data, field, update}) => {
    return <div className="GridDiv">
        <label className="GridBlock">{name}</label>
        <input type="text" value={data} onChange={e => update(e.target.value, field)}></input>
    </div>
}

const FormNotes = () => {
    return <div className="GridDiv">
            <label  className="GridBlock">Notes</label>
            <textarea rows="3" cols="55"/>
        </div>
}

const FormSend = ({sendForm}) => {
    return <div className="UpdateDiv" >
            <input className="Button" type="button" value={"Update"} onClick={e => sendForm(e)}></input>
            </div>
}


const Form = () => {

    const [formData, updateFormData] = useState(defaultUser)

    const updateForm = (value, key) => {
        updateFormData({
            ...formData,
            [key]: value
        })
    }

    const sendForm = (e) => {
        e.preventDefault()
        //this will reset on restart
        defaultUser = formData
        console.log("default user", defaultUser)
    }

    return <form className="Form">
            <div className="FormGrid">
                <FormField name="Firstname" data={formData.firstname} field='firstname' update={updateForm}/>
                <FormField name="Lastname" data={formData.lastname} field='lastname' update={updateForm}/>
                <FormField name="Alias" data={formData.alias} field='alias' update={updateForm}/>
                <FormField name="Phone" data={formData.phone} field='phone' update={updateForm}/>
                <FormField name="Email" data={formData.email} field='email' update={updateForm}/>
                <FormField name="VR User" data={formData.vr_user} field='vr_user' update={updateForm}/>
                <FormField name="Address" data={formData.address} field='address' update={updateForm}/>
                <FormField name="Base" data={formData.base} field='base' update={updateForm}/>
                <FormField name="Planet" data={formData.planet} field='planet' update={updateForm}/>
                <FormField name="Position" data={formData.position} field='position' update={updateForm}/>
                <FormField name="Department" data={formData.department} field='department' update={updateForm}/>
                <FormField name="Manager" data={formData.manager} field='manager' update={updateForm}/>
            </div>
            <div className="FormBottomGrid" >
                <FormNotes data={formData.notes} key='notes'/>
                <FormSend sendForm={sendForm}/>
            </div>
        </form>
}

export const FormContainer = ({userName}) => {
    return <div className="Container" style={{"width": "900px"}}>
        <h2>{userName}</h2>
        <Form />
    </div>
}