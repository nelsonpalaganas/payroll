import './App.css';
import RegistrationForm from './auth/registerForm'
import LoginForm from './auth/loginForm';

function App() {
  return (
    <div className="header">
        <a className='title' href='onboarding'>Payroll Staff</a>
        <h2 className='welcome'>Welcome! Staff</h2>

        {/* <RegistrationForm/> */}
        <LoginForm/>
    </div>
  );
}

export default App;
