import React, { useState } from "react";
import './authForm.css'

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[role, setRole] = useState('');
    const[dob, setDob] = useState('');
    const[mobile, setMobile] = useState('');
    const[age, setAge] = useState('');

    const handleRegister = () => {
        //backend logic
    }

    return(
        <div className="container">
            <form className="register-form">
                <h2>Register Now</h2>
                <div className="fields">
                    <input 
                    type="text"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} 
                    />    
                
                    <input 
                    type="text"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                    />
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                    <input 
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)} 
                    />
                    <input 
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)} 
                    />
                    <input 
                    type="number"
                    placeholder="Mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)} 
                    />
                    <input 
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)} 
                    />
                </div>
                
                <button onClick={handleRegister}>Sign up</button>
            </form>
        </div>
    );
};

export default RegistrationForm