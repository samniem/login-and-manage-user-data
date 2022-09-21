import './App.css';
import { Header } from './components/header'
import { LoginContainer } from './components/loginContainer'
import { FormContainer } from './components/formContainer'
import { LogoutButton } from './components/logout'
import { useState } from 'react'

const user = ['XYZ123', 'password']

function App() {

  const [loggedIn, updateLoggedIn] = useState(false)

  const attemptLogin = (e, data) => {
    e.preventDefault()
    if(data.username === user[0] && data.password === user[1]) {
      updateLoggedIn(true)
    }
  }

  const logout = () => updateLoggedIn(false)

  return (
   <div className="App">
      <Header />
      {!loggedIn ? 
        <LoginContainer attemptLogin={attemptLogin}/> :
         <>
          <LogoutButton logout={logout}/>
          <FormContainer userName={user[0]}/>
        </>
      }
    </div>
  );
}

export default App;


