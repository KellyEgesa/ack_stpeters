import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="container p-2 d-flex justify-content-center">
        {!user && (
          <Link to="/LogIn">
            <div className="container p-2 d-flex justify-content-center">
              <div className="card h-50 m-2" style={{ width: "7rem" }}>
                <img
                  src={require("../IMG-5355.jpg")}
                  alt="Card Image top"
                  className="card-img-top"
                />
              </div>
            </div>
          </Link>
        )}
        {user && (
          <Link className="navbar-brand navbar-primary" to="/logout">
            <div className="container p-2 d-flex justify-content-center">
              <div className="card h-50 m-2" style={{ width: "7rem" }}>
                <img
                  src={require("../IMG-5355.jpg")}
                  alt="Card Image top"
                  className="card-img-top"
                />
              </div>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default Header;
