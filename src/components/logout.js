import './../App.css'

export const LogoutButton = ({logout}) => {
    return <button className="Button LogoutButton" onClick={() => logout()}>Logout</button>
}