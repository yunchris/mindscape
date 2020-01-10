import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="social-div"><a href="https://github.com/yunchris"><div className="soc-git"></div></a></div>
      <div className="social-div"><a href="https://www.linkedin.com/in/christopher-yun/"><div className="soc-linkedin"></div></a></div>
      <button className="login-button" onClick={() => openModal('login')}>Log In</button>
      <button className="signup-button" onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="social-div"><a href="https://github.com/yunchris"><div className="soc-git"></div></a></div>
      <div className="social-div"><a href="https://www.linkedin.com/in/christopher-yun/"><div className="soc-linkedin"></div></a></div>
      <div className="header-greet"><h3 className="header-name">Hi, {currentUser.first_name}!</h3></div>
      <div className="header-greet"><button className="logout-button" onClick={logout}>Log Out</button></div>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
  );
};

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

