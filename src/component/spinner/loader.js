import React, { Component } from "react";
import loader from "./loader.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loader} alt="loader" style={{width: "7rem", height: "5rem"}} />
      </div>
    );
  }
}
export default Spinner;
