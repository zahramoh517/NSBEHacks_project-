import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'; 
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      {/* Navbar */}
      <nav>
        <ul>
          <li><a href="#home" onClick={() => setActivePage('home')}>Home</a></li>
          <li><a href="#login" onClick={() => setActivePage('login')}>Login</a></li>
          <li><a href="#register" onClick={() => setActivePage('register')}>Register</a></li>
        </ul>
      </nav>

      {/* Render the active page */}
      <div className="content-container">
        {activePage === 'home' && <Home />}
        {activePage === 'login' && <Login />}
        {activePage === 'register' && <Register />}
      </div>
    </div>
  );
};

export default App;
