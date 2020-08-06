import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import Services from "../common/testing";
import { saveWorshipper } from "../common/Worshippers";
import { toast } from "react-toastify";

class MainPage extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      dob: "",
    },
    errors: {},
  };
  handleServicesSelect = (service) => {
    const data = { ...this.state.data };
    data["service"] = service._id;
    this.setState({ data });
    this.setState({ selectedService: service });
  };
  schema = {
    firstname: Joi.string()
      .min(3)
      .max(25)
      .required()
      .label("Firstname")
      .error(() => {
        return {
          message: "Enter a valid FirstName",
        };
      }),
    lastname: Joi.string()
      .min(3)
      .max(25)
      .required()
      .label("Lastname")
      .error(() => {
        return {
          message: "Enter a valid LastName",
        };
      }),
    email: Joi.string()
      .email()
      .label("Email")
      .error(() => {
        return {
          message: "Enter a valid Email",
        };
      }),
    phonenumber: Joi.string()
      .min(10)
      .max(10)
      .regex(/^([0][7])([0-9]{8})$/)
      .label("Phone Number")
      .error(() => {
        return {
          message: "Enter a valid phone number",
        };
      }),
    dob: Joi.number()
      .label("Date of Birth")
      .min(1962)
      .max(2007)
      .error(() => {
        return {
          message: "You do not pass age restrictions",
        };
      }),
    service: Joi.required(),
  };
  doSubmit = async () => {
    try {
      await saveWorshipper(this.state.data);
      this.props.history.push("/Booked");
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  };
  render() {
    return (
      <div>
        <div className="m-2">
          <h6 style={{ textAlign: "center" }}>
            ACK ST PETERS KAHAWA SUKARI <br /> SUNDAY SERVICE BOOKING <br />
          </h6>
          Kindly fill the form to reserve your seat from the comfort of your
          home
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col">
              {this.renderInput("firstname", "First Name")}
            </div>
            <div className="col">
              {this.renderInput("lastname", "Last Name")}
            </div>
          </div>
          {this.renderInput("email", "Email", "email")}
          <div className="form-row">
            <div className="col">
              {this.renderInput("phonenumber", "Phone Number")}
            </div>
            <div className="col">
              {this.renderInput("dob", "Year of Birth")}
            </div>
          </div>
          <Services
            onTry={this.state.data.service}
            selectedItem={this.state.selectedService}
            onItemSelect={this.handleServicesSelect}
          />
          {this.renderButton("BOOK")}
        </form>
      </div>
    );
  }
}
export default MainPage;
