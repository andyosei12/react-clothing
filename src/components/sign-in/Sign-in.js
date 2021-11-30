import { Component } from "react";

import "./Sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  inputChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  submitFormHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitFormHandler}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.inputChangeHandler}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
