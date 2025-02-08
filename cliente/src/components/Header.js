import React from 'react';
import '../components/css/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <img src="/logoBlanco.png" alt="Gapsi Logo" className="logo" />
      <h1>e-Commerce Gapsi</h1>
    </header>
  );
};

export default Header;