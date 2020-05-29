import React from 'react';
import profileLogo from './img/profile-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App</h1>
      <h2>Author: Cyber Jigit</h2>
      <img src={profileLogo} alt="profile-image" />
    </div>
  );
}

export default App;
