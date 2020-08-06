import React, { Component } from "react";

class Booked extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-7">Thank You!</h1>
          <p className="lead">
            <strong>Please check your email</strong> and click on the link sent
            to your email to finish booking your seat
          </p>
          <hr></hr>
          <p>{/* Having trouble? <a href="#">Contact us</a> */}</p>
        </div>
      </div>
    );
  }
}

export default Booked;
