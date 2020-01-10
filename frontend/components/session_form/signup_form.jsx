import React from 'react';
import { withRouter } from 'react-router-dom';

class signupForm extends React.Component {

  componentDidMount() {
    this.props.clearErrors();
  }

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
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
    this.props.processForm(this.state).then(this.props.closeModal);
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">

          <h2 className="signup-form-greeting">Join</h2>
          <h1 className="signup-form-title">Mindscape</h1>
          <br />
          <small>Infinite Worlds Await You</small>
          <div onClick={this.props.closeModal} className="close-x">×</div>

          <div className="signup-form">
            <br />
            <div className="signup-form-name">
              <label>
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  placeholder="First Name..."
                  className="input-control"
                />
              </label>
              <div></div>
              <label>
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  placeholder="Last Name..."
                  className="input-control"
                />
              </label>
            </div>
            <br />
            <label>
              <input type="email"
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
            <input className="signup-submit-button" type="button" value="Sign Up" />
          </div>
          {this.renderErrors()}
        </form>
        <div className="small2">Already a member?
          <br/> 
          <a className="modal-links" onClick={this.props.openLoginModal}>Log In Here</a> 
        </div>
      </div>
    );
  }
}

export default withRouter(signupForm);
