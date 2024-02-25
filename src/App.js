import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MoodTracker from './components/MoodTracker'; // Import the MoodTracker component
import SafeSpace from './components/SafeSpace'; // Import the SafeSpace component

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/mood-tracker">Mood Tracker</Link></li>
            <li><Link to="/safe-space">Safe Space</Link></li> {/* Add link to SafeSpace */}
          </ul>
        </nav>

        {/* Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/safe-space" element={<SafeSpace />} /> {/* Add route for SafeSpace */}
          {/* ...other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
