import './App.css';
import { Header } from './components/header'
import { LoginContainer } from './components/loginContainer'
import { FormContainer } from './components/formContainer'
import { Logout } from './components/logout'

function App() {
  return (
   <div className="App">
      <Header />
      <LoginContainer />
      <Logout />
      <FormContainer />
    </div>
  );
}

export default App;
