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
        <div>
            <form>
            <h2>Register Now</h2>
                <input 
                type="text"
                placeholder="Firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
                />           
                <br />
                <input 
                type="text"
                placeholder="Lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
                />
                <br />
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <input 
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)} 
                />
                <br />
                <input 
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)} 
                />
                <br />
                <input 
                type="number"
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)} 
                />
                <br />
                <input 
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)} 
                />
                <br />
                <button onClick={handleRegister}>Sign up</button>
            </form>
        </div>
    );
};

export default RegistrationForm