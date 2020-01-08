import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>Mindscape</h1>
      </Link>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
