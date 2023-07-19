import React from "react";
import CurrentDate from "./sub_components/CurrentDate";
import TextArea from "./sub_components/TextArea";
import SaveButton from "./sub_components/SaveButton";
import Tables from "./sub_components/Tables";

const Tasks = () => {
  return (
    <div className="container-sm border border-1 m-5">
      <div>
        <div className="d-flex justify-content-between">
          <div>Tasks.</div>
          <CurrentDate />
        </div>
        <TextArea />
        <SaveButton />
        <Tables type = "Tasks"/>
      </div>
    </div>
  );
};

export default Tasks;
