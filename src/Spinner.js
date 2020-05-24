import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//default props in use if we forget to pass props
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
