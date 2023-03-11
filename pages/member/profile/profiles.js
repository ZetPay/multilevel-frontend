import React, { useEffect } from 'react'
import Admin from "layouts/Admin.js";
import CardSettings from 'components/Cards/CardSettings';
import CardProfile from 'components/Cards/CardProfile';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../store/redux/profileReducer';
import { PaymentActions } from '../../../store/redux/paymentReducer';

export default function Profiles(){
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profileReducer.profile)
  const { deposit_list : { data, fetching } } = useSelector(state => state.paymentReducer);

  useEffect(()=>{
    dispatch(PaymentActions.doGetDepositListRequest());
    dispatch(ProfileActions.doGetProfileRequest())
  },[])
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <CardProfile 
            name={profile?.data?.user?.name} 
            paket={profile?.data?.user?.deposit?.name} 
            downline={profile?.data?.user?.downlines} />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  )
}

Profiles.layout = Admin;