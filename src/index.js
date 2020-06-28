import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//functional component implementing hooks
const App = () => {
  //state initialization
  const [lat, setLat] = useState(null);
  const [errMessage, setErrMsg] = useState("");

  const getLatitude = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrMsg(err.message)
    );
  };

  useEffect(() => {
    getLatitude();
  }, []);

  const renderContent = () => {
    if (errMessage && !lat) {
      return <div>Error: {errMessage}</div>;
    } else if (!errMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  };

  return <div className="border red">{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

// //Class component
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { lat: null, errMessage: "" };
//   // }

//   //state initialization
//   state = { lat: null, errMessage: "" };

//   //component lifecycle methods
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({ lat: position.coords.latitude }),
//       (err) => this.setState({ errMessage: err.message })
//     );
//   }

//   renderContent() {
//     if (this.state.errMessage && !this.state.lat) {
//       return <div>Error: {this.state.errMessage}</div>;
//     } else if (!this.state.errMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     } else {
//       return <Spinner message="Please accept location request" />;
//     }
//   }

//   //React says we have to define render!!!!
//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));
