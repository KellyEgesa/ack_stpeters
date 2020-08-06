import React, { Component } from "react";
import { getWorshippers, deleteWorshippers } from "../common/Worshippers";
import { toast } from "react-toastify";

class Confimed extends Component {
  state = { worshipper: [], user: [] };
  async componentDidMount() {
    try {
      const { data: worshipper } = await getWorshippers(
        this.props.match.params.id
      );
      this.setState({ worshipper, user: "valid" });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("invalid user");
        this.setState({ user: "Invalid User" });
      }
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
        this.setState({ user: ex.response.data });
      }
    }
  }
  handleDeleteWorshippers = async () => {
    await deleteWorshippers(this.props.match.params.id);
    toast.success("Deleted");
    this.props.history.push("/confimed/" + this.props.match.params.id);
  };
  render() {
    const { user, worshipper } = this.state;
    console.log(worshipper);
    return (
      <div>
        {user === "valid" ? (
          <div className="jumbotron text-center">
            <h1 className="display-7">SEAT BOOKED</h1>{" "}
            <p className="">
              {" "}
              {worshipper.firstname} {worshipper.lastname} has booked a seat for{" "}
              {worshipper.services.name} service at {worshipper.services.time}{" "}
            </p>{" "}
            <p>
              To delete your booking press here:{" "}
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.handleDeleteWorshippers();
                }}
              >
                DELETE
              </button>
            </p>
          </div>
        ) : user === "invalid1" ? (
          <div className="jumbotron text-center">
            <h1 className="display-7">SEAT NOT BOOKED</h1>{" "}
            <p className="lead">
              <strong>Your seat was not booked because {user};</strong> <br />{" "}
              Kindly contact the Admin for further assistance{" "}
            </p>{" "}
          </div>
        ) : (
          <div className="jumbotron text-center">
            <h1 className="display-7">SEAT NOT BOOKED</h1>
            <p className="lead">
              <strong>{user};</strong> <br /> Kindly contact the Admin for
              further assistance
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Confimed;
