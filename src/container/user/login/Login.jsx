import React, { useState } from 'react';
import '../register/register.css'
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
    // Define state variables for form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // You can access the form values in the state variables (firstName, lastName, etc.)
        navigate('/students');

    };

    return (
        <div className="container w-screen">

            <form className="form" onSubmit={handleSubmit}>
                <p className="title  align-middle"> Login </p>
                <p className="message">Signup now and get full access to our app.</p>
                <label>
                    <input
                        required

                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span>Email</span>
                </label>

                <label>
                    <input
                        required

                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>Password</span>
                </label>



                <button className="submit bg-blue-700" type="submit">
                    Submit
                </button>

                <p className="signin">
                    don't have an account? <Link to="/register">Registation</Link>
                </p>
            </form>
        </div>
    );
}

export default RegistrationForm;
