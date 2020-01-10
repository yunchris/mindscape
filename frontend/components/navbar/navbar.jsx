import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting';

const Navbar = () => {

  return (
    <div className="nav-container">
      <div className="nav-left"><Link to="/"><img src={window.logo} className="logo" /></Link></div>
      <div className="nav-right"><Greeting /></div>
    </div>
  );
};

export default Navbar;