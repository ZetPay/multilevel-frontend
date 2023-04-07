import Button from 'components/Atoms/Button/Button';
import Router from 'next/router'
import React, { useEffect, memo, useState } from 'react'
import { Tree, TreeNode } from "react-organizational-chart";
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from 'store/redux/profileReducer';

const color = {
  silver: "#c0c0c0",
  gold: "#d4af37",
  diamond: "#61e2ff",
}

const OrgChartSugest = () => {
  const dispatch = useDispatch();
  const { tree: { data } } = useSelector(state => state.profileReducer)
  const profile = useSelector(state => state.profileReducer.profile)
  const renderColor = (param) => {
    const paket = param?.split(' ')?.[1].toLowerCase()
    
    switch(paket){
      case "gold":{
        return color.gold;
      }
      case "silver":{
        return color.silver
      }
      case "diamond":{
        return color.diamond
      }
      default :
        return "";
    }
  }
  const [suggest] = useState({
    id: 172,
    name: "Herrp P",
    member_id: "BCA28177023",
    referral_code: "69983496",
    package_id: 3,
    package: {
      id: 3,
      name: "Paket Diamond"
    },
    profile: null,
    downlines: [
      {
        id: 1,
        position: "left",
        user: {
          downlines: [
            {
              id: 0,
              position: "left",
              user: {
                id: 175,
                downlines: [
                  {
                    id: 0,
                    position: "left",
                    user: {
                      id: 180,
                      downlines: []
                    }
                  },
                  {
                    id: 0,
                    position: "right",
                    user: {
                      id: 179,
                      downlines: []
                    }
                  }
                ]
              }
            },
            {
              id: 0,
              position: "right",
              user: {
                id: 176,
                downlines: [
                  {
                    id: 1,
                    position: "left",
                    user: {
                      id: 181,
                      downlines: []
                    }
                  },
                  {
                    id: 1,
                    position: "right",
                    user: {
                      id: 182,
                      downlines: []
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        id: 2,
        position: "right",
        user: {
          id: 173,
          downlines: [
            {
              id: 1,
              position: "left",
              user: {
                id: 178,
                downlines: [
                  {
                    id: 0,
                    position: "left",
                    user: {
                      id: 187,
                      downlines: []
                    }
                  },
                  {
                    id: 0,
                    position: "right",
                    user: {
                      id: 190,
                      downlines: []
                    }
                  }
                ]
              }
            },
            {
              id: 1,
              position: "right",
              user: {
                id: 177,
                downlines: [
                  {
                    id: 1,
                    position: "left",
                    user: {
                      id: 191,
                      downlines: []
                    }
                  },
                  {
                    id: 1,
                    position: "right",
                    user: {
                      id: 192,
                      downlines: []
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  })
  const [renderdata,setRenderData] = useState(data)

  useEffect(()=>{
    dispatch(ProfileActions.doGetTreeRequest({
      setData: (data) => setRenderData(data)
    }))
    dispatch(ProfileActions.doGetProfileRequest())
  },[])

  const handleGetDetailTree = id => {
    dispatch(ProfileActions.doGetTreeRequest({
      id,
      setData: (data) => setRenderData(data)
    }))
  }

  const RenderNodeOne = (v_one,i) => {
    let localdata = renderdata.downlines
    if(localdata?.length === 1){
      if(localdata?.[0].position === "right"){
        localdata.push({})
        localdata.reverse();
      }
    }else{
      if(localdata?.[0]?.position === "right"){
        localdata.reverse();
      }
    }

    if(localdata?.[i]?.position === "left"){
      return (
        <div className="p-5" style={{backgroundColor: 
          localdata?.[i]?.user?.package?.name !== undefined && 
          renderColor(localdata?.[i]?.user?.package?.name)}}>
          <p className="font-italic text-sm text-white pb-2">Ref : {localdata?.[i]?.referrer?.name?.substring(0, 7)+' ...'}</p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{localdata?.[i]?.user?.name?.length > 0 && localdata?.[i]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{localdata?.[i]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${localdata?.[i]?.user?.referral_code}-${profile?.data?.user?.id}`}</p>
          <p className="font-italic text-sm text-white">{localdata?.[i]?.user?.package?.name?.split(' ')[1]}</p>
        </div>
      )
    }

    if(localdata?.[i]?.position === "right"){
      return (
        <div className="p-5" style={{backgroundColor: 
          localdata?.[i]?.user?.package?.name !== undefined && 
          renderColor(localdata?.[i]?.user?.package?.name)}}>
          <p className="font-italic text-sm text-white pb-2">Ref : {localdata?.[i]?.referrer?.name?.substring(0, 7)+' ...'}</p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{localdata?.[i]?.user?.name?.length > 0 && localdata?.[i]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{localdata?.[i]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${localdata?.[i]?.user?.referral_code}-${profile?.data?.user?.id}`}</p>
          <p className="font-italic text-sm text-white">{localdata?.[i]?.user?.package?.name?.split(' ')[1]}</p>
        </div>
      )
    }
    
    
    return (
      <div className="p-5">
        <p className="font-medium text-md pt-2 text-black mb-3">DAFTAR</p>
        <Button label={v_one?.position} onClick={() =>{
          Router.push({
            pathname: 'newmember',
            query: { ref: `${renderdata?.referral_code}${profile?.data?.user?.id !== data.id ? '-'+profile?.data?.user?.id : ''}`, position:  v_one?.position},
          })
        }} type="submit" />
      </div>
    )
  }
  
  const RenderNodeTwo = (v_two,y,i) => {
    let localdata = renderdata.downlines?.[i]?.user?.downlines
    if(localdata?.length === 1){
      if(localdata?.[0].position === "right"){
        localdata.push({})
        localdata.reverse();
      }
    }else{
      if(localdata?.[0]?.position === "right"){
        localdata.reverse();
      }
    }

    if(localdata?.[y]?.position === "left"){
      return (
        <div className="p-5" style={{backgroundColor: renderColor(localdata?.[y]?.user?.package?.name)}}>
          <p className="font-italic text-sm text-white pb-2">Ref : {localdata?.[y]?.referrer?.name?.substring(0, 7)+' ...'}</p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{localdata?.[y]?.user?.name !== undefined && localdata?.[y]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{localdata?.[y]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${localdata?.[y]?.user?.referral_code}-${profile?.data?.user?.id}`}</p>
          <p className="font-italic text-sm text-white">{localdata?.[y]?.user?.package?.name?.split(' ')[1]}</p>
        </div>
      )
    }

    if(localdata?.[y]?.position === "right"){
      return (
        <div className="p-5" style={{backgroundColor: renderColor(localdata?.[y]?.user?.package?.name)}}>
          <p className="font-italic text-sm text-white pb-2">Ref : {localdata?.[y]?.referrer?.name?.substring(0, 7)+' ...'}</p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{localdata?.[y]?.user?.name !== undefined && localdata?.[y]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{localdata?.[y]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${localdata?.[y]?.user?.referral_code}-${profile?.data?.user?.id}`}</p>
          <p className="font-italic text-sm text-white">{localdata?.[y]?.user?.package?.name?.split(' ')[1]}</p>
        </div>
      )
    }

    return (
      <div className="p-5">
        <p className="font-medium text-md pt-2 text-black mb-3">DAFTAR</p>
        <Button label={v_two?.position} onClick={() =>{
            Router.push({
              pathname: 'newmember',
              query: { ref: `${renderdata?.downlines?.[v_two.id]?.user?.referral_code}-${profile?.data?.user?.id}`, position:  v_two?.position},
            })
          }} type="submit" />
      </div>
    )
  } 

  const RenderNodeThre = (v_thre,v,y,i) => {
    let localdata = renderdata.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines
    if(localdata?.length === 1){
      if(localdata?.[0].position === "right"){
        localdata.push({})
        localdata.reverse();
      }
    }else{
      if(localdata?.[0]?.position === "right"){
        localdata.reverse();
      }
    }

    if(localdata?.[v]?.position === "left"){
      return (
        <div className="p-5" style={{backgroundColor: renderColor(localdata?.[v]?.user?.package?.name)}}>
          <p className="font-italic text-sm text-white pb-2">Ref : {localdata?.[v]?.referrer?.name?.substring(0, 7)+' ...'}</p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{localdata?.[v]?.user?.name !== undefined && localdata?.[v]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{localdata?.[v]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${localdata?.[v]?.user?.referral_code}-${profile?.data?.user?.id}`}</p>
          <p className="font-italic text-sm text-white">{localdata?.[v]?.user?.package?.name?.split(' ')[1]}</p>
        </div>
      )
    }

    if(localdata?.[v]?.position === "right"){
      return (
        <div className="p-5" style={{backgroundColor: renderColor(localdata?.[v]?.user?.package?.name)}}>
          <p className="font-italic text-sm text-white pb-2">Ref : {localdata?.[v]?.referrer?.name?.substring(0, 7)+' ...'}</p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{localdata?.[v]?.user?.name !== undefined && localdata?.[v]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{localdata?.[v]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${localdata?.[v]?.user?.referral_code}-${profile?.data?.user?.id}`}</p>
          <p className="font-italic text-sm text-white">{localdata?.[v]?.user?.package?.name?.split(' ')[1]}</p>
        </div>
      )
    }

    return (
      <div className="p-5">
        <p className="font-medium text-md pt-2 text-black mb-3">DAFTAR</p>
        <Button label={v_thre?.position} onClick={() =>{
            Router.push({
              pathname: 'newmember',
              query: { ref: `${renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.referral_code}-${profile?.data?.user?.id}`, position:  v_thre?.position},
            })
          }} type="submit" />
      </div>
    )
  } 
    
  const RenderNode = () => {
    return suggest?.downlines?.map((v_one,i) => ( 
      <>
        <TreeNode key={i} label={
          <div className="flex items-center justify-center" onClick={() => {
            if(renderdata?.downlines?.[i]?.user_id){
              handleGetDetailTree(renderdata?.downlines?.[i]?.user_id)
            }
          }}>
            <div 
              className="border border-gray-300 rounded rounded-md justify-center items-center"  
              style={{backgroundColor: 'white', width: 170, height: 220}}>
              {RenderNodeOne(v_one,i)}
            </div>
          </div>
        }>
          {v_one?.user?.downlines?.map((v_two,y) => (
            <>
              <TreeNode key={y} label={
                <div className="flex items-center justify-center" onClick={() => { 
                  if(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user_id){
                    handleGetDetailTree(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user_id)
                  }
                }}>
                 <div 
                  className="border rounded rounded-md w-24 h-30" 
                  style={{backgroundColor: 'white', width: 170, height: 220}}>
                  { RenderNodeTwo(v_two,y,i) }
                 </div>
                </div>
              }>
                {v_two?.user?.downlines?.map((v_tree,v) => (
                  <>
                    <TreeNode key={v} label={
                      <div className="flex items-center justify-center" onClick={() => {
                        if(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines?.[v]?.user_id){
                          handleGetDetailTree(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines?.[v]?.user_id)
                        }
                      }}>
                        <div className="border rounded rounded-md" 
                          style={{backgroundColor: 'white', width: 170, height: 220}}>
                          {RenderNodeThre(v_tree,v,y,i)}
                        </div>
                      </div>
                    } />
                  </>
                ))}
              </TreeNode>
            </>
          ))}
        </TreeNode>
      </>
    ))
  }
    return (
        <Tree
          lineWidth={"1px"}
          lineColor={"black"}
          lineHeight={"30px"}
          lineBorderRadius={"5px"}
          label={
            <div className="flex items-center justify-center" onClick={() => {}}>
              <div className="border rounded rounded-md p-5 jusify-center" style={{backgroundColor: renderColor(data?.package?.name)}}>
                <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                <p className="font-medium text-md pt-2 text-white">{data?.name}</p>
                <p className="font-italic text-sm text-white">{data?.member_id}</p>
                <p className="font-italic text-sm text-white">{data?.referral_code}{profile?.data?.user?.id !== data.id ? '-'+profile?.data?.user?.id : ''}</p>
                <p className="font-italic text-sm text-white">{data?.package?.name?.split(' ')[1]}</p>
              </div>
            </div>
          }>
          <RenderNode />
        </Tree>
    )
}

export default memo(OrgChartSugest)