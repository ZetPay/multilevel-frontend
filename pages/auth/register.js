import React from "react";
import { useRouter } from 'next/router'

// layout for page

import Auth from "layouts/Auth.js";
import Button from "components/Atoms/Button/Button";
import Input from "components/Atoms/Input/Input";
import Option from "components/Atoms/Option/Option";

export default function Register() {
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign Up
                  </h6>
                </div>
                {/* <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div> */}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <Input type="text" label="Username" placeholder="Input username" />
                  </div>

                  <div className="relative w-full mb-3">
                    <Input type="email" label="Email" placeholder="Input Email" />
                  </div>

                  <div className="relative w-full mb-3">
                    <Input type="password" label="Password" placeholder="Input Password" />
                    <div
                      className="absolute top-0 right-0 text-blueGray-400 bg-transparent rounded text-base font-normal block w-8 py-3 px-1 leading-normal cursor-pointer text-center mt-5 mr-2"
                      onClick={() => {  }}>
                        <i className="fas fa-eye"></i>
                    </div>
                  </div>

                  <div className="relative w-full mb-3">
                    <Input type="number" label="Phone" placeholder="Input Phone Number" />
                  </div>

                  <div className="relative w-full mb-3">
                    <Input type="text" label="Referal Code" placeholder="Input Referal Code" />
                  </div>

                  <div className="relative w-full mb-4">
                      <Option label="Position" placeholder="Chose Position" data={["Kiri","Kanan"]} />
                  </div>

                  <div className="relative w-full mb-4">
                    <Option label="Select Packet Deposit" placeholder="Chose Deposite" data={["Rp 1.500.000,-","Rp 2.700.000,-","Rp 3.500.000,-"]} />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer py-5">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Button label="Register" />
                  </div>
                  <div className="flex flex-row align-center">
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                    <p className="text-gray-200 text-sm text-center px-2">or</p>
                    <hr className="w-full mt-3 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="text-center mt-2">
                    <Button label="Login" onClick={e => {
                      e.preventDefault()
                      router.push('/auth/login')
                    }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
