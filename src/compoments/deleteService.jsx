import React, { Component } from "react";
import { deleteService, getService } from "../common/Service";
import { toast } from "react-toastify";

class DeleteService extends Component {
  state = { service: [] };

  async componentDidMount() {
    const { data: service } = await getService();
    this.setState({ service });
  }
  handleDeleteService = async (services) => {
    const originalService = this.state.service;
    const service = originalService.filter((s) => s._id !== services._id);
    this.setState({ service });
    try {
      await deleteService(services._id);
      toast.success("This Service has been deleted");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This Service has been already deleted");
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
      this.setState({ service: originalService });
    }
  };
  handleBack = () => {
    this.props.history.push("/Dashboard");
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleBack()}
        >
          BACK
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Time</th>
              <th>Seats Available</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.service.map((service) => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>{service.time}</td>
                <td>{service.seatsLeft}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteService(service)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeleteService;
