import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats";
import Table from "components/Organizms/Table/Table";
import Member from "layouts/Member";
import { useDispatch, useSelector } from "react-redux";
import { ProfileActions } from "store/redux/profileReducer";
import { formatMoney } from "helper/numberFormat";

export default function Wallet() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profileReducer.profile)
  const [thead] = useState([
    {
      name: "No"
    },
    {
      name: "Name"
    },
    {
      name: "Nominal"
    },
    {
      name: "Status"
    },
    {
      name: "Date"
    }
  ])

  useEffect(()=>{
    dispatch(ProfileActions.doGetProfileRequest())
  },[])

  console.log("HELLO",profile?.data?.user?.balance)
  
    return (
        <div className="flex flex-wrap bg-white">
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
                    <div className="w-full xl:w-6/12 px-2">
                      <CardStats
                        statSubtitle="WALLET"
                        statTitle={"Rp "+formatMoney(profile?.data?.user?.balance)+",-"}
                        statArrow="-"
                        statPercent="3.48"
                        statPercentColor="text-emerald-500"
                        statIconName="fas fa-wallet"
                        statIconColor="bg-red-500"
                      />
                    </div>
                    <div className="w-full xl:w-6/12 px-2">
                      <CardStats
                        statSubtitle="TOTAL DOWNLINE"
                        statTitle={profile?.data?.user?.downlines?.length}
                        statArrow="down"
                        statPercent="3.48"
                        statPercentColor="text-red-500"
                        statDescripiron="Since last week"
                        statIconName="fas fa-users"
                        statIconColor="bg-orange-500"
                      />
                    </div>
                  </div>
                </div>
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold py-3 px-6"
                    htmlFor="grid-password">
                      Payment History
                </label>
                <Table color="light">
                    <table className="border-collapse items-center w-full bg-transparent">
                      <thead>
                        <tr>
                        {
                          thead?.map((x,i) => (
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                {x?.name}
                              </th>
                          ))
                        } 
                        </tr>  
                      </thead>
                      <tbody>
                        {/* {
                          sponsor?.data?.sponsor?.data?.map((y,l) => (
                            <tr id={l} className="border border-solid">
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {l+1}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  Rp {formatMoney(y?.nominal)},-
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.status}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {moment(y?.updated_at).format("DD-MMM-YYYY h:mm:ss")}
                                </td>
                            </tr>
                          ))
                        } */}
                      </tbody>
                    </table>
                  </Table>
              </div>
            </div>
        </div>
    )
}

Wallet.layout = Member;