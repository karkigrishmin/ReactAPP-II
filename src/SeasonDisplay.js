import "./style.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake",
  },
};

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

  const { text, iconName } = seasonConfig[season];

  // const text =
  //   season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";

  // const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div className={`wrapper ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
