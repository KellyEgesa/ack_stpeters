import React from "react";

const Maintable = (props) => {
  const { items, toDelete, goBack } = props;

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={() => goBack()}>
        BACK
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Service</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((worshipper) => (
            <tr key={worshipper._id}>
              <td>
                {worshipper.firstname} {worshipper.lastname}
              </td>
              <td>{worshipper.phonenumber}</td>
              <td>{worshipper.services.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => toDelete(worshipper)}
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
};

export default Maintable;
