import React, { useState } from 'react';
// import './register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
    navigate('/login');
    // You can access the form values in the state variables (firstName, lastName, etc.)
  };

  return (
    <div className="container">


    <form className="form " onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      <div className="flex">
        <label>
          <input
            required

            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span>Firstname</span>
        </label>

        <label>
          <input
            required

            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span>Lastname</span>
        </label>
      </div>

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

      <label>
        <input
          required

          type="password"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span>Confirm password</span>
      </label>

      <button className="submit bg-blue-700" type="submit">
        Submit
      </button>

      <p className="signin">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
   </div>
  );
}

export default RegistrationForm;
