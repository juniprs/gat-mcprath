import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
      console.log('hi')
    return (
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType === 'login' ? 'LOGIN' : 'CREATE ACCOUNT'}
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <input
              type="email"
              className="login-input"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              />
            <br/>
            <input
              type="password"
              className="login-input"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              />
            <br />
            <button className="session-submit">{this.props.formType === 'login' ? 'SIGN IN' : 'CREATE'}</button>
            <br/>
            {this.props.formType === "login" ? this.props.navLink : ''}
            <br/>
            {}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
