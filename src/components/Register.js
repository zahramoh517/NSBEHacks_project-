// Register.js
import React, { useState } from 'react';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Here you would handle the registration logic
    console.log('Register with:', userDetails);
  };

  return (
    <section id="register">
      <h2>Create Your Account</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={userDetails.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
