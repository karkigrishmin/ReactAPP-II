import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//functional component
// const App = () => {
//   return <div>Hii there</div>;
// };

//Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //to update state object
        this.setState({ lat: position.coords.latitude });
        console.log(position.coords.latitude);
      },
      (err) => this.setState({ errMessage: err.message })
    );
  }
  //React says we have to define render!!!!
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    } else if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading!!!</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
