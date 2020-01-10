import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting';

const Navbar = () => {
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('#header-scroll').slideDown(500);
      $('#header-full').slideUp(500);
    } else {
      $('#header-scroll').slideUp(500);
      $('#header-full').slideDown(500);
    }
  });

  return (
    <div className="nav-container">
      <div className="nav-padding">
        <div id="header-full" className="header">
          <div><Link to="/"><img src={window.logo} className="logo" /></Link></div>
          <div className="nav-links"><Greeting /></div>
        </div>

      </div>

      <div id="header-scroll" className="header">
        <div>
          <div><Link to="/"><img src={window.logo} className="logo-scroll" /></Link></div>
          <div className="nav-links-scroll"><Greeting /></div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;