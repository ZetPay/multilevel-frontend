import Member from 'layouts/Member';
import React from 'react'

export default function RekeningBank() {
  return (
        <>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-wrap -mt-4">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                      <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Bank Account</h6>
                        {/* <button
                          className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                          type="button"
                        >
                          Settings
                        </button> */}
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
                      <label className="relative text-gray-400 focus-within:text-gray-600 block">
                          <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                  
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-wrap -mt-4">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                      <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Upgrade Bank Account</h6>
                        {/* <button
                          className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                          type="button"
                        >
                          Settings
                        </button> */}
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
                      <label className="relative text-gray-400 focus-within:text-gray-600 block">
                          <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                      
                          <input type="email" name="email" id="email" placeholder="email@kemuscorp.com" className="form-input border border-gray-900 py-3 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

RekeningBank.layout = Member;