import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  };

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  };

  componentWillUnmount() {
    this.props.clearErrors()
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          return (<li className="errors" key={`error-${i}`}>{error}</li>)
        })}
      </ul>
    );
  };

  demoUser(e) {
    e.preventDefault();
    const demo = { email: 'demo@user.com', password: 'testing' };
    this.props.processForm(demo)
  };

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className={this.props.formType === 'login' ? "login-form-box" : 'signup-form-box'}>
          {this.props.formType === "login" ? "LOGIN" : "CREATE ACCOUNT"}
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <input
              type="email"
              className="login-input"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <input
              type="password"
              className="login-input"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            {this.props.formType !== "login" ? (
              <button className="session-submit">CREATE</button>
              ) : (
                ""
                )}
            {this.props.formType === "login" ? (
              <div className="login-bttns">
                <input type='submit' className="login-submit" value='SIGN IN'/>
                <button className="demo-submit" onClick={this.demoUser}>
                  DEMO
                </button>
              </div>
            ) : (
              ""
              )}
            <div className="session-links">
              {this.props.formType === "login" ? this.props.navLink : ""}
              <a href="/">Return to Store</a>
            </div>
          </div>
          </form>
      </div>
    );
  };
};

export default SessionForm;
