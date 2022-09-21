import './../App.css'
import { useState } from 'react'

const LoginForm = ({attemptLogin}) => {
    const [inputData, updateInputData] = useState({
        username: '',
        password: ''
    })

    const userInput = (value, key) => {
        updateInputData({
            ...inputData,
            [key]: value 
        })
    }

    return <form>
        <input type="text" placeholder='Username' className='InputField' value={inputData.username} onChange={e => userInput(e.target.value, 'username')}></input>
        <input type="password" placeholder='Password' className='InputField' value={inputData.password} onChange={e => userInput(e.target.value, 'password')}></input>
        <input type="submit" value="Login" className="Button" onClick={(e)  => attemptLogin(e, inputData)}></input>
    </form>
}

export const LoginContainer = ({attemptLogin}) => {

    return <div className="Container">
        <h2 className="ContainerHeader">User Login</h2>
        <LoginForm attemptLogin={attemptLogin}/>
    </div>
}