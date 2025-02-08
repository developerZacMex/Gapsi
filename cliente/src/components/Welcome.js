import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/css/Welcome.css'; 

const Welcome = () => {
  const [welcomeData, setWelcomeData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/api/welcome').then(response => {
      setWelcomeData(response.data);
    });
  }, []);

  return (
    <div className="welcome">
      <img src="/logo192.png" alt="Candidate" className="candidate-image" />
      <h2>{welcomeData.message}</h2>
      <p>Version: {welcomeData.version}</p>
    </div>
  );
};

export default Welcome;