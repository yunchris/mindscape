//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

// TEST
import { fetchScapes } from './actions/scape_actions'

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

// TEST
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchScapes = fetchScapes;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  document.getElementById("header-scroll").style.display = "none";
});
