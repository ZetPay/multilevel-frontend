import React from "react";
import Admin from "layouts/Admin";
import CardStats from "components/Cards/CardStats";

export default function Wallet() {
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Wallet</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div className="flex px-4 lg:px-10 py-10 pt-0 bg-white h-100 border border-red-200">
                  <div className="flex flex-wrap w-full mt-4">
                    <div className="w-full xl:w-4/12 px-2">
                      <CardStats
                        statSubtitle="TRAFFIC"
                        statTitle="350,897"
                        statArrow="up"
                        statPercent="3.48"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="far fa-chart-bar"
                        statIconColor="bg-red-500"
                      />
                    </div>
                    <div className="w-full xl:w-4/12 px-2">
                      <CardStats
                        statSubtitle="NEW USERS"
                        statTitle="2,356"
                        statArrow="down"
                        statPercent="3.48"
                        statPercentColor="text-red-500"
                        statDescripiron="Since last week"
                        statIconName="fas fa-chart-pie"
                        statIconColor="bg-orange-500"
                      />
                    </div>
                    <div className="w-full xl:w-4/12 px-2">
                      <CardStats
                        statSubtitle="SALES"
                        statTitle="924"
                        statArrow="down"
                        statPercent="1.10"
                        statPercentColor="text-orange-500"
                        statDescripiron="Since yesterday"
                        statIconName="fas fa-users"
                        statIconColor="bg-pink-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

Wallet.layout = Admin;