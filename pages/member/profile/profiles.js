import React, { useEffect, useState } from 'react'
import Member from 'layouts/Member';
import CardSettings from 'components/Cards/CardSettings';
import CardProfile from 'components/Cards/CardProfile';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../store/redux/profileReducer';
import { PaymentActions } from '../../../store/redux/paymentReducer';
import Table from 'components/Organizms/Table/Table';

export default function Profiles(){
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profileReducer.profile)
  const { deposit_list : { data, fetching } } = useSelector(state => state.paymentReducer);
  const [thead] = useState([
    {
      name: "No"
    },
    {
      name: "Name"
    },
    {
      name: "Email"
    },
    {
      name: "Downline"
    },
    {
      name: "Referal"
    }
  ])

  useEffect(()=>{
    // dispatch(PaymentActions.doGetDepositListRequest());
    dispatch(ProfileActions.doGetProfileRequest())
  },[])
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <CardProfile 
            name={profile?.data?.user?.name} 
            paket={profile?.data?.user?.deposit?.name} 
            downline={profile?.data?.user?.downlines}
            referals={profile?.data?.user?.referral_code}
            idmember={profile?.data?.user?.member_id} />
            <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Donwline</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div className="flex py-10 pt-0 bg-white">
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
                          profile?.data?.user?.downlines?.map((y,l) => (
                            <tr id={l} className="border border-solid">
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {l+1}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.email}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.position}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {y?.user?.referral_code}
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
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  )
}

Profiles.layout = Member;