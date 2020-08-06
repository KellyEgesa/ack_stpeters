import React, { Component } from "react";
import SidePanel from "../common/sidepanel";
import { getService, printService } from "../common/Service";
import { toast } from "react-toastify";

class Dashboard extends Component {
  state = { service: [] };

  async componentDidMount() {
    const { data: service } = await getService();
    this.setState({ service });
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  handleServicesSelect = (service) => {
    this.props.history.push("/worshipperTable/" + service._id);
    this.setState({ selectedService: service });
  };

  handleDeleteService = async (services) => {
    this.props.history.push("/deleteserv");
  };

  handlePrintService = async (print) => {
    try {
      await printService(print._id);
      toast.success("Printed successfully... Check Email");
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  };
  doService = async () => {
    this.props.history.push("/service");
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="m-2">
            <h6 style={{ textAlign: "center" }}>
              DASHBOARD <br /> SUNDAY SERVICE BOOKING <br />
            </h6>
            <p>Showing {this.state.service.length} service bookings</p>
          </div>
          <SidePanel
            items={this.state.service}
            selectedItem={this.state.selectedService}
            onItemSelect={this.handleServicesSelect}
            toDelete={this.handleDeleteService}
            toPrint={this.handlePrintService}
            toService={this.doService}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
