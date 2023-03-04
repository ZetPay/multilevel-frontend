import React, { useEffect } from 'react'

import Admin from "layouts/Admin.js";
import CardSettings from 'components/Cards/CardSettings';
import CardProfile from 'components/Cards/CardProfile';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../store/redux/profileReducer';

export default function Profiles(){
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profileReducer.profile)

  useEffect(()=>{
    dispatch(ProfileActions.doGetProfileRequest())
  },[])

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile name={profile?.data?.user?.name} downline={profile?.data?.user?.downline} />
        </div>
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  )
}

Profiles.layout = Admin;