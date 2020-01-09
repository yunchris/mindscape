import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demologin = this.demologin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  demologin(e) {
    e.preventDefault();
    const guest = ({ email: 'guest@guest.com', password: 'guestguest' });
    this.props.processForm(guest).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul className="submit-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <h2 className="login-greeting">Welcome Back to</h2> 
          <h1 className="login-title">Mindscape</h1> 
          <br />
          <small>Step Into Your Customized Dream</small>
          <div onClick={this.props.closeModal} className="close-x">×</div>
          
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email address..."
                className="input-control"
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password..."
                className="input-control"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value="Log In"/>
          </div>
          <input className="demo-login" onClick={this.demologin} value="Demo Log In"></input>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
