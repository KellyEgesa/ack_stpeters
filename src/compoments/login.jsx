import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { checkUser } from "../service/userService";
import { toast } from "react-toastify";

class LoginForm extends Form {
  state = {
    data: { name: "", password: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  goBack = () => {
    this.props.history.push("/");
  };
  doSubmit = async () => {
    try {
      const { data: jwt } = await checkUser(this.state.data);
      localStorage.setItem("token", jwt);
      window.location = "/Dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <button className="btn btn-primary m-2" onClick={() => this.goBack()}>
            BACK
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
