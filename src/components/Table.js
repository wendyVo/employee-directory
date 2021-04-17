import React from "react";

import "../css/style.css"

function Table(props) {
    return (
        <table className="table table-striped table-bordered table-dark mt-3">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col" 
            onClick={props.handleSortName}
            className="dropdown-toggle"
            role="button"
            data-toggle="dropdown">Name</th>
      <th scope="col"
            onClick={props.handleSortPhone}
            className="dropdown-toggle"
            role="button"
            data-toggle="dropdown">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      <th scope="col" 
            onClick={props.handleSortLocation}
            className="dropdown-toggle"
            role="button"
            data-toggle="dropdown">Location</th>
    </tr>
  </thead>
  <tbody>
  {props.children}
  </tbody>
</table>
    );
}

export default Table;