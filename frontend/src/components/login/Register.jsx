import React, { Component, useState } from "react";
import { signUp } from "../../actions/auth";
import { connect } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
// import Layout from '../layout/layout';
// import Header from '../layout/header';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  hendlSubmit = async (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      console.warn("Form submitted");
    } else {
      console.warn(this.state.errors, "Form has errors.");
    }
    await this.props.signUp(this.state);
    this.props.history.push("/dashboard");
  };
  hendlChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  componentDidMount() {
    if (Cookies.get("token")) {
      console.log("token");
      this.props.history.push("/dashboard");
    } else {
      console.log("not token");
      this.props.history.push("/register");
    }
  }
  render() {
    const { users } = this.props;
    return (
      <div id="login">
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
                    Register{users.isAuthenticated}
                  </h3>
                  {/* {this.state && <div className="alert alert-danger text-center"><span className="text-danger">{this.state}</span></div>} */}

                  <div className="form-group">
                    <span style={{ color: "red" }}>
                      {this.state.errors["name"]}
                    </span>
                    <label htmlFor="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      onChange={this.hendlChange}
                    />
                  </div>

                  <div className="form-group">
                    <span style={{ color: "red" }}>
                      {this.state.errors["email"]}
                    </span>
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
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={this.hendlChange}
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
                    <Link to="/login" className="text-info">
                      Login
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
  const { users } = state;
  return {
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
