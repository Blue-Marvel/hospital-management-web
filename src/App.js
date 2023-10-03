import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/login";
import SignupPage from "./component/signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className=" flex flex-col items-center justify-center min-h-screen py-2  bg-gray-100">
          <div className=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <Routes>
              <Route path="/" element={<LoginPage/>} />
                <Route path="/sign-up" element={<SignupPage/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
