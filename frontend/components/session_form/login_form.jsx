import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  componentDidMount() {
    this.props.clearErrors();
  }

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
    this.props.processForm(this.state).then(this.props.closeModal);
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
          
          <h2 className="login-form-greeting">Welcome Back to</h2> 
          <h1 className="login-form-title">Mindscape</h1> 
          <br/>
          <div onClick={this.props.closeModal} className="close-x">×</div>
          <br/>
          <button className="demo-login-button" onClick={this.demologin} type="button">Demo Log In</button>
          <br/>
          <p className="subtitle fancy"><span>OR</span></p>
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
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password..."
                className="input-control"
              />
            </label>
            <br/>
            <input className="login-submit-button" type="submit" value="Log In"/>
          </div>
          
          {this.renderErrors()}
        </form>
        <div className="small2">Haven't joined yet?
          <br/>
          <a className="modal-links" onClick={this.props.openSignupModal}>Sign Up Here</a>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
