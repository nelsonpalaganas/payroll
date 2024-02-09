import React, {useState} from 'react'
import './App.css';
import RegistrationForm from './auth/registerForm'
import LoginForm from './auth/loginForm';

function App() {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);

  const handleEmployee = () => {
    
    setShowLoginForm(true);
    
  }

  const handleAdmin = () => {
    
    setShowAdminForm(true);
    
  }
  
  return (
    <div className="header">
        <a className='title' href='onboarding'>Payroll Staff</a>
        <h2 className='welcome'>Welcome! Staff</h2>
        <div className='onboard-card'>
          <h2>Select Role</h2>
            <form>
              <div className='employee-button'>
                <button type = "button" onClick={handleEmployee}>Employee</button>
              </div>
              <div>
                <button type = "button" onClick={handleAdmin}>Admin</button>
              </div>
              
            </form>
        </div>
        {showLoginForm && <LoginForm/>}
        {/* <RegistrationForm/> */}
        
    </div>
  );
}

export default App;