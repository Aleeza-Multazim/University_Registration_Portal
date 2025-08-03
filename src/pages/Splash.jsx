import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Images/numl-logo.png';
function Splash() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="splash-container d-flex flex-column justify-content-center align-items-center text-center">
      <img src={logo} alt="NUML Logo" className="img-fluid mb-4" style={{ width: '150px' }} />
      <h1 className="animated-title">Welcome to NUML-Registration portal!</h1>
      <p className="animated-sub">Register yourself to be a part of NUML.</p>
      <button className="btn btn-primary m-2" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
}

export default Splash;
