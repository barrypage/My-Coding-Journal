import React from "react";

const CurrentDate = () => {

  let date = new Date()

  console.log(date)

  return (
    <div className="align-self-end">
      <label htmlFor="date" className="form-label">Date:</label>
      <input type="date" name="date" className="form-control-sm" />
    </div>
  );
};

export default CurrentDate;
