import React from "react";
import Admin from "layouts/Admin";
import Table from "components/Organizms/Table/Table";

export default function Level() {

    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Bonus Level</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div className="flex px-4 lg:px-10 py-10 pt-0 bg-white">
                 <Table color="light" />
                </div>
              </div>
            </div>
        </div>
    )
}

Level.layout = Admin;