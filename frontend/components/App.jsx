import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import Home from './home/home';
import ScapesIndexContainer from './scape_index/scapes_index_container';
import ScapeShowContainer from './scape_show/scapes_show_container';

const App = () => (
  <div>
    
    <Modal />
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/scapes" component={ScapesIndexContainer} />
    <Route exact path="/scapes/:scapeId" component={ScapeShowContainer} />
    
  </div>
);

export default App;
