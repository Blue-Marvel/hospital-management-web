import React, { Component } from "react";
import Main from "./main";

// import { HelloWorld } from "./hello";

class App extends Component {
  render() {
    return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2  bg-gray-100">

      <Main/>
    </div>
    );
  }
}

export default App;
