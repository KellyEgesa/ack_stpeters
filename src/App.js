import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

import LoginForm from "./compoments/login";
import ServiceForm from "./compoments/service";
import MainPage from "./compoments/load";
import Dashboard from "./compoments/admin";
import Header from "./common/header";
import Booked from "./compoments/book";
import WorshipperTable from "./compoments/Worshippers";
import Confirmed from "./compoments/confirmed";
import DeleteService from "./compoments/deleteService";
import Logout from "./compoments/logout";

import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <div>
            <Header user={user} />
            <div className="content">
              <Switch>
                <Route path="/confirmed/:id" component={Confirmed} />
                <Route
                  path="/worshipperTable/:id"
                  render={(props) => {
                    if (!localStorage.getItem("token")) {
                      return <Redirect to="LogIn" />;
                    }
                    return <WorshipperTable {...props} />;
                  }}
                />
                <Route
                  path="/deleteserv"
                  render={(props) => {
                    if (!localStorage.getItem("token")) {
                      return <Redirect to="LogIn" />;
                    }
                    return <DeleteService {...props} />;
                  }}
                />
                <Route
                  path="/service"
                  render={(props) => {
                    if (!localStorage.getItem("token")) {
                      return <Redirect to="LogIn" />;
                    }
                    return <ServiceForm {...props} />;
                  }}
                />
                <Route
                  path="/Dashboard"
                  render={(props) => {
                    if (!localStorage.getItem("token")) {
                      alert(user);
                      return <Redirect to="LogIn" />;
                    }
                    return <Dashboard {...props} />;
                  }}
                />
                <Route path="/LogIn" component={LoginForm} />
                <Route path="/logout" component={Logout} />
                <Route path="/Booked" component={Booked} />
                <Route path="/" component={MainPage} />
              </Switch>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
