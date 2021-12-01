import { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

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
        <div className="title">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
        </div>

        <form onSubmit={this.submitFormHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChangeHandler={this.inputChangeHandler}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChangeHandler={this.inputChangeHandler}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
