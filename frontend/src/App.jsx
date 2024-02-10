import React, {useState} from 'react'
import './App.css';
import RegistrationForm from './auth/registerForm'
import LoginForm from './auth/loginForm';
import AdminForm from './auth/adminForm'

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
              <div className='fields'>
                <button type = "button" onClick={handleEmployee}>Employee</button>
                <button type = "button" onClick={handleAdmin}>Admin</button>
              </div>
             
              
            </form>
        </div>
        {showLoginForm && <LoginForm/>}
        {showAdminForm && <AdminForm/>}
        {/* <RegistrationForm/> */}
        
    </div>
  );
}

export default App;