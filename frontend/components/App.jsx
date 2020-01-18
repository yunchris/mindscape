import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import Home from './home/home';
import ScapesIndexContainer from './scape_index/scapes_index_container';
import ScapeShowContainer from './scape_show/scapes_show_container';
import Footer from './footer/footer';

const App = () => (
  <div className="app">
    <Modal />
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/scapes/:token" render={routeProps => {
      const token = routeProps.match.params.token;
      const parsedToken = parseInt(token, 10);
      if (Number.isNaN(parsedToken)) {
        return <ScapesIndexContainer
          token={token} 
        />
      } else {
        return <ScapeShowContainer 
          scapeId={parsedToken}
        />
      }
    } } />
    <Footer />
  </div>
);

export default App;
