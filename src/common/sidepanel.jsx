import React from "react";

const SidePanel = (props) => {
  const {
    items,
    onItemSelect,
    selectedItem,
    toDelete,
    toPrint,
    toService,
  } = props;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item._id}
            className={
              item === selectedItem
                ? "list-group-item active d-flex justify-content-between align-items-center"
                : "list-group-item d-flex justify-content-between align-items-center"
            }
          >
            {item.name}
            <span className="badge badge-primary badge-pill m-2">
              {item.seatsLeft}
            </span>
            <button
              className="btn btn-secondary m-1"
              style={{ fontSize: "14px" }}
              onClick={() => toPrint(item)}
            >
              Print
            </button>
          </li>
        ))}
      </ul>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary m-2" onClick={() => toService()}>
            Add Service
          </button>
        </div>
        <div className="col">
          <button className="btn btn-danger m-2" onClick={() => toDelete()}>
            Delete Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
