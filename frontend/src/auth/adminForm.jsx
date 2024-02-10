import React, {useState} from 'react';
import './authForm.css';

const AdminForm = () => {
    const [admins, setAdmins] = useState(['NJ', 'Jay', 'Nelson']);
    const [pin, setPin] = useState(Number);

    return (
        <div className='container'>
            <h2>Enter your pin</h2>
            <form>
                <div className='admin-fields'>
                    {admins.map((admins, index) => (
                        <button type='button' className='admin-button' key={index}>{admins}</button>
                    ))}
                </div>
               

                <div className='pin-field'>
                    <input 
                    type="pin"
                    placeholder='Pin'
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    />
                </div>
                <button type='button'>Enter</button>
                
            </form>
            
        </div>
    )   
}

export default AdminForm