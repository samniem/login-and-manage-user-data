import './App.css';
import { Header } from './components/header'
import { LoginContainer } from './components/loginContainer'
import { FormContainer } from './components/formContainer'

function App() {
  return (
   <div className="App">
      <Header />
      <LoginContainer />
      <FormContainer />
    </div>
  );
}

export default App;
