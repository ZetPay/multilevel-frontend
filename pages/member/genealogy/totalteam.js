import React, { useEffect, useState } from "react";
import Table from "components/Organizms/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Member from "layouts/Member";
import Link from "next/link";
import { ProfileActions } from "store/redux/profileReducer";

export default function Totalteam() {
  const dispatch = useDispatch();
  const { member_list } = useSelector(state => state.profileReducer);
  const [thead] = useState([
    {
      name: "No"
    },
    {
      name: "Nama"
    },
    {
      name: "Packet"
    },
    {
      name: "Status"
    },
    {
      name: "Reff Code"
    },
    {
      name: "Date"
    }
  ])

  useEffect(() => {
    dispatch(ProfileActions.doGetMemberListRequest())
  },[])
  
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-12 py-6">
                  <div className="text-center flex justify-between">
                    <Link
                      href={"newmember"}
                      data-modal-target="defaultModal" 
                      data-modal-toggle="defaultModal" 
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Add New Member
                    </Link>
                    <h6 className="text-blueGray-700 text-xl font-bold">Total Team</h6>
                  </div>
                </div>
                <div className="flex px-4 lg:px-10 py-10 pt-0 bg-white">
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
                          member_list?.data?.map((y,l) => (
                            <tr id={l} className="border border-solid">
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {l+1}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.package?.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.status}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.referral_code}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {moment(y?.user?.created_at).format("DD-MMM-YYYY h:mm:ss")}
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

Totalteam.layout = Member;