import React from "react";

const servicetable = (props) => {
  const { items } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Time</th>
            <th>Seats</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.Time}</td>
              <td>{service.seatsLeft}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default servicetable;
