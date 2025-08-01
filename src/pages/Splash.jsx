import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/Images/NUML monogram pic.png';


function Splash (){
     const Navigate = useNavigate();
     const handleRegisterClick = () => {
         Navigate ('/register')
     };
     return (
<div className="splash-container d-flex flex-column justify-content-center align-items-center text-center">
      <img src={logo} alt="NUML Logo" className="img-fluid mb-4" style={{ width: '150px' }} />
     <h1 class = "animated-title">Welcome to NUML-Registration portal!</h1>
     <p class = "animated-sub">Register yourself to be a part of NUML.</p>
     <div>
          <button class = "btn btn-primary m-2" onClick={handleRegisterClick}>Register</button>
     </div>
      </div>
     );

}
export default Splash