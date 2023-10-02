import React from "react";

import { Logincomponent } from "./component/logincomponent";

function Register() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <Logincomponent />
      <div className=" w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <h2 className=" text-3xl font-bold mb-2">Hello, Friend!</h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <p className="mb-10">
          Fill up personal information and start a journey with us.
        </p>
        <a
          href="#"
          className=" border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Register;
