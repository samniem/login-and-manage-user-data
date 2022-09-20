import './App.css';
import { Header } from './components/header'
import { LoginContainer } from './components/loginContainer'
import { FormContainer } from './components/formContainer'
import { LogoutButton } from './components/logout'

function App() {
  return (
   <div className="App">
      <Header />
      <LoginContainer />
      <LogoutButton />
      <FormContainer />
    </div>
  );
}

export default App;
