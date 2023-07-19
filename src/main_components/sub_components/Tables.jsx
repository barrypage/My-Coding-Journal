import React from "react";
import "../../App.css";

const Tables = (props) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>{props.type} for today.</th>
          </tr>
        </thead>
        <tbody>
            <tr><td>Sample 1</td></tr>
            <tr><td>Sample 2</td></tr>
            <tr><td>Sample 3</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
