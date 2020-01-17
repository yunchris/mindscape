import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting';

const Navbar = () => {
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('#header-scroll').slideDown(500);
      $('#header-full').slideUp(50);
    } else {
      $('#header-scroll').slideUp(50);
      $('#header-full').slideDown(50);
    }
  });

  return (
    <div className="nav-container">
      <div id="header-full" className="header">
        <Link to="/" replace><img src={window.logo} className="logo" /></Link>
        <div className="nav-links"><Greeting /></div>
      </div>
      <div id="header-scroll" className="header">
          <Link to="/" replace><img src={window.logo} className="logo-scroll" /></Link>
          <div className="nav-links-scroll"><Greeting /></div>
      </div>
    </div>
  );
};

export default Navbar;