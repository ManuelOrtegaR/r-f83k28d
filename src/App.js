import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    let num = 1;
    return (
      <div>
        <span className="value">{num}</span>
        <button
          id="inc"
          onClick={function () {
            return num++;
          }}
        >
          Incrementa
        </button>
      </div>
    );
  }
}

export default App;
