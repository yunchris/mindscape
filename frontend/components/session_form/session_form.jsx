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
          <small>Step into the world of your dreams</small>
          <div onClick={this.props.closeModal} className="close-x">×</div>
          
          <div className="login-form">
            <br />
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
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
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
