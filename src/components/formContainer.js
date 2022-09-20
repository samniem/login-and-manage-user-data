import './../App.css'


const FormField = ({name, options}) => {
    return <div className="GridDiv">
        <label className="GridBlock">{name}</label>
        <input type="text"></input>
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

export const FormContainer = () => {
    return <div className="Container" style={{"width": "900px"}}>
        <h2>User123</h2>
        <form className="Form">
            <div className="FormGrid">
                <FormField name="Firstname" />
                <FormField name="Lastname" />
                <FormField name="Alias" />
                <FormField name="Phone" />
                <FormField name="Email" />
                <FormField name="VR User" />
                <FormField name="Address" />
                <FormField name="Base" />
                <FormField name="Planet" />
                <FormField name="Position" />
                <FormField name="Department" />
                <FormField name="Manager" />
            </div>
            <div className="FormBottomGrid" >
                <FormNotes />
                <FormSend />
            </div>
        </form>
    </div>
}