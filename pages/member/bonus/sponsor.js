import React, { useEffect, useState } from "react";
import Table from "components/Organizms/Table/Table";
import { BonusActions } from "store/redux/bonusReducer";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "helper/numberFormat";
import moment from "moment";
import Member from "layouts/Member";

export default function Sponsor() {
    const dispatch = useDispatch();
    const { sponsor } = useSelector(state => state.bonusReducer)
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

    useEffect(() => {
      dispatch(BonusActions.doGetBonusSponsorRequest())
    },[])

    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Sponsor</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div style={{height: 500}} className="flex px-4 lg:px-10 py-10 pt-0 bg-white h-100 border border-red-200">
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
                        {
                          sponsor?.data?.map((y,l) => (
                            <tr id={l} className="border border-solid">
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {l+1}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.type}
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
                        }
                      </tbody>
                    </table>
                  </Table>
                </div>
              </div>
            </div>
        </div>
    )
}

Sponsor.layout = Member;