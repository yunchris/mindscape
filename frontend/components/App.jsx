import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <Modal />
    <navbar>
      
      <div className="nav-item"><Link to="/"><img src={window.logo} className="logo"/></Link></div>
      <div className="nav-item"></div>
      <div className="nav-item"></div>
      <div className="nav-item"><GreetingContainer /></div>
    </navbar>
  </div>
);

export default App;
