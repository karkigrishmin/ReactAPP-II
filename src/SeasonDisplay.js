import React from "react";

//in northern hemisphere(lat>0)- 3 to 8(summer),0 to 2 and 9 to 11(winter)
//in southern hemisphere, just opposite
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const text =
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
