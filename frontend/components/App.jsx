import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
// import Navbar from './navbar/navbar';

const App = () => (
  <div>
    <Modal />
    {/* <Navbar /> */}
    <div className="nav-container">
      <div className="nav-item"><Link to="/"><img src={window.logo} className="logo"/></Link></div>
      <div className="nav-three"><GreetingContainer /></div>
    </div>
  </div>
);

export default App;


Navbar