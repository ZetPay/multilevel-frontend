import React from "react";
import Member from "layouts/Member";

export default function Blockuser() {
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Blockuser</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div style={{height: 500}} className="flex px-4 lg:px-10 py-10 pt-0 bg-white h-100 border border-red-200">
                 
                </div>
              </div>
            </div>
        </div>
    )
}

Blockuser.layout = Member;