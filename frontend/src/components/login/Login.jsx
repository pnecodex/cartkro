import React, { Component, useState } from "react";
import { signIn } from "../../actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      // type: "input",
      type: "password",
      checkedType: false,
    };
  }
  hendlSubmit = async (e) => {
    e.preventDefault();
    await this.props.signIn(this.state);
    this.props.history.push("/dashboard");
  };
  hendlChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  ShowPassword = (e) => {
   
    this.setState({
      type: this.state.type === "password" ? "text" : "password",
    });
  };
  componentDidMount() {
    if (Cookies.get("token")) {
      console.log("token");
      this.props.history.push("/dashboard");
    } else {
      console.log("not token");
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  onSubmit={this.hendlSubmit}
                >
                  <h3 className="text-center text-info">
                    Login{this.state.success}
                  </h3>
                  {/* {this.state && <div className="alert alert-danger text-center"><span className="text-danger">{this.state}</span></div>} */}

                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      E:mail
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={this.hendlChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password
                    </label>
                    <br />
                    <input
                      type={this.state.type}
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={this.hendlChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Show Password
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      name="ShowPassword"
                      id="ShowPassword"
                      onChange={this.ShowPassword}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      defaultValue="submit"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/register" className="text-info">
                      Register here
                    </Link>
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

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    ...state,
    // user:state.user,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
