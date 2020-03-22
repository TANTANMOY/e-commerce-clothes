import React, { Component } from "react";
import "./signin.scss";
import FormInput from "../form-input/forminput";
import CustomButton from "../../components/custom-button/custom-button";
import { signInWithGoogle, auth } from "../firebase/firebase.utlis";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const {email,password} = this.state
    try {
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({email: '', password: ''})

    }catch(error){
      console.log(error)
    }
  
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>Email</label>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            label="email"
            required
          />
          <label>Password</label>
          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            label="password"
            required
          />
          <div className="button">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default Signin;
