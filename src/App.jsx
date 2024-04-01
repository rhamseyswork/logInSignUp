import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import LoginSignUp from './LoginSignUp/LoginSignUp';

function App() {
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleDashBoard = (username) => {
    setLoggedInUsername(username);
    console.log('Logged in as:', loggedInUsername);
  };

  return (
    <>
      <Router>
        <LoginSignUp handleDashBoard={handleDashBoard} />
      </Router>
    </>
  );
}

export default App;
