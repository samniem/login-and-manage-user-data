

export const FormContainer = () => {
    return <div className="Container" style={{"width": "80%"}}>
        <h2>User123</h2>
        <form className="Form">
            <div className="FormGrid">
                <div className="GridDiv">
                    <label className="GridBlock">Firstname</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Lastname</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Alias</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Phone</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Email</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">VR User</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Address</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Base</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Planet</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Position</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Department</label>
                    <input type="text"></input>
                </div>
                <div className="GridDiv">
                    <label className="GridBlock">Manager</label>
                    <input type="text"></input>
                </div>
            </div>
            <label>Notes</label>
            <textarea rows="3" />
            <input className="Button" type="button" value={"Update"}></input>
        </form>
    </div>
}