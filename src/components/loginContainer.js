import './../App.css'

const LoginForm = () => {
    return <form>
        <input type="text" placeholder='Username' className='InputField'></input>
        <input type="password" placeholder='Password' className='InputField'></input>
        <input type="submit" value="Login" className="Button"></input>
    </form>
}

export const LoginContainer = () => {

    return <div className="Container">
        <h2 className="ContainerHeader">User Login</h2>
        <LoginForm />
    </div>
}