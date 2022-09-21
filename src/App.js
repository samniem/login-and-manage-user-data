import './App.css';
import { Header } from './components/header'
import { LoginContainer } from './components/loginContainer'
import { FormContainer } from './components/formContainer'
import { LogoutButton } from './components/logout'
import { useState } from 'react'

const user = ['XYZ123', 'password']

function App() {

  const [loggedIn, updateLoggedIn] = useState(false)

  return (
   <div className="App">
      <Header />
      {!loggedIn ? 
        <LoginContainer /> :
         <>
          <LogoutButton />
          <FormContainer userName={user[0]}/>
        </>
      }
    </div>
  );
}

export default App;


