import React, { Component } from "react";
import firebase from "../../config/Firabase.config";
import "../../App.css";

class SignInOrSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
  };

  signup = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="loginMainDiv">
        <div className="card main-card z-depth-5">
          <div className="card-content card-big-header blue darken-2 white-text">
            <p className="flow-text center-align">SignIn / SignUp</p>
          </div>
          <div className="card-content">
            <div id="login">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="loginEmail">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="SignIn-Up-Button">
                  <button
                    type="submit"
                    className="btn waves-effect waves-light pink"
                    onClick={this.signin}
                  >
                    Sign In
                  </button>
                  <button
                    type="submit"
                    className="btn waves-effect waves-light pink"
                    onClick={this.signup}
                  >
                    Sign Up
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInOrSignUp;
