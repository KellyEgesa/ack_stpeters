import React from "react";
import { getService } from "./Service";
import Form from "./form";

class Services extends Form {
  state = { service: [], data: {}, errors: {} };

  async componentDidMount() {
    const { data } = await getService();
    const service = [...data];
    this.setState({ service });
  }

  render() {
    const { service } = this.state;
    const { onItemSelect, selectedItem } = this.props;
    return (
      <React.Fragment>
        <h6>Kindly choose a service:</h6>
        <div className="row container p-2 d-flex justify-content-center m-2">
          {service.map((service) => (
            <div className="col-sm-" key={service._id}>
              <div
                className={
                  service === selectedItem
                    ? "card text-center page-item active m-1"
                    : "card text-center page-item  m-1"
                }
                style={({ cursor: "pointer" }, { width: "8rem" })}
                href="#"
                value={service.name}
                name={service}
                onClick={() => onItemSelect(service)}
              >
                <div className="card-body page-link">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">
                    Time: {service.time} <br /> Seats: {service.seatsLeft}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Services;
