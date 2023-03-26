import React from 'react'
import Member from 'layouts/Member';
import dynamic from "next/dynamic";
import { AiOutlineSync } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { ProfileActions } from 'store/redux/profileReducer';
const Organizational = dynamic(() => import("../../../components/Organizms/OrgChart/OrgChart"),{ssr: false})
export default function Diagram() {
  const dispatch = useDispatch();

  const resetTree = () => {
    dispatch(ProfileActions.doGetTreeRequest(""))
  }

    return (
        <div className="flex flex-wrap">
            <div className="overflow-x-scroll w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Diagram Tree</h6>
                    <button
                      onClick={resetTree}
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      <AiOutlineSync color="white" width="24" height="24" />
                    </button>
                  </div>
                </div>
                <div className="overflow-x-scroll flex px-4 lg:px-10 py-10 pt-0 bg-white h-100 border border-red-200 justify-center">
                  <Organizational/>
                </div>
              </div>
            </div>
        </div>
    )
}

Diagram.layout = Member;
