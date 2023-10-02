import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";


export const Logincomponent = () => {
  return (
  <div className="w-3/5 p-5">
        <div className=" text-left font-bold">
          <span className=" text-green-500">Company</span>Name
        </div>
        <div className=" py-10">
          <h2 className="text-3xl font-bold mb-2 text-green-500">
            Sign in to Account
          </h2>
          <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
          <div className="flex justify-center my-2">
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaFacebookF className=" text-sm " />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaLinkedinIn className=" text-sm " />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaGoogle className=" text-sm " />
            </a>
          </div>
          <p className=" text-gray-400 py-3">or use your email account</p>
          <div className=" flex flex-col items-center">
            <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
              <FaRegEnvelope className="  text-gray-400 m-2 " />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" bg-gray-100 flex-1 outline-none text-sm"
              />
            </div>
            <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
              <MdLockOutline className="  text-gray-400 m-2 " />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" bg-gray-100 flex-1 outline-none text-sm"
              />
            </div>
            <div className="flex w-64 mb-5 justify-between">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className=" mr-1" />{" "}
                Remind me
              </label>
              <a href="#" className=" text-xs">
                Forget Password
              </a>
            </div>
            <a
              href="#"
              className=" border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
  );
}


export const SignUPcomponent = () => {
  return (
    <div className="w-3/5 p-5">
        <div className=" text-left font-bold">
          <span className=" text-green-500">Company</span>Name
        </div>
        <div className=" py-10">
          <h2 className="text-3xl font-bold mb-2 text-green-500">
            Sign in to Account
          </h2>
          <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
          <div className="flex justify-center my-2">
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaFacebookF className=" text-sm " />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaLinkedinIn className=" text-sm " />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaGoogle className=" text-sm " />
            </a>
          </div>
          <p className=" text-gray-400 py-3">or use your email account</p>
          <div className=" flex flex-col items-center">
            <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
              <FaRegEnvelope className="  text-gray-400 m-2 " />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" bg-gray-100 flex-1 outline-none text-sm"
              />
            </div>
            <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
              <MdLockOutline className="  text-gray-400 m-2 " />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" bg-gray-100 flex-1 outline-none text-sm"
              />
            </div>
            <div className="flex w-64 mb-5 justify-between">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className=" mr-1" />{" "}
                Remind me
              </label>
              <a href="#" className=" text-xs">
                Forget Password
              </a>
            </div>
            <a
              href="#"
              className=" border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
  );
}

