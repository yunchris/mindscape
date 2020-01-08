import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <Modal />
    <div className="nav-container">
      <div className="nav-item"><Link to="/"><img src={window.logo} className="logo"/></Link></div>
      <div className="nav-three"><GreetingContainer /></div>
    </div>
  </div>
);

export default App;
