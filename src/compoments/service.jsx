import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { saveService } from "../common/Service";
import { toast } from "react-toastify";

class serviceForm extends Form {
  state = {
    data: { name: "", time: "", seatsLeft: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().min(3).max(20).required(),
    time: Joi.string()
      .regex(/^([0-9]{2}):([0-9]{2})$/)
      .required(),
    seatsLeft: Joi.number().min(0).max(100).required(),
  };

  doSubmit = async () => {
    try {
      await saveService(this.state.data);
      this.props.history.push("/Dashboard");
      console.log("submitted");
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  };

  render() {
    return (
      <div>
        <div>
          <h4>ADD SERVICE</h4>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("time", "Time", "time")}
            {this.renderInput("seatsLeft", "Seats")}
            <div className="form-row">
              <div className="col">{this.renderButton("ADD")}</div>
              <div className="col">
                {/* <button className="btn btn-primary">BACK</button> */}
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    );
  }
}

export default serviceForm;
