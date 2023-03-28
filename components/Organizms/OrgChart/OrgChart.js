import React, { useEffect, memo } from 'react'
import { Tree, TreeNode } from "react-organizational-chart";
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from 'store/redux/profileReducer';

const OrgChart = () => {
  const dispatch = useDispatch();
  const { tree } = useSelector(state => state.profileReducer)
  const color = {
    silver: "#c0c0c0",
    gold: "#d4af37",
    diamond: "#61e2ff",
  }

  const renderColor = (param) => {
    const paket = param?.split(' ')[1].toLowerCase()
    
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

  useEffect(()=>{
    dispatch(ProfileActions.doGetTreeRequest(""))
  },[])

  const handleGetDetailTree = id => {
    dispatch(ProfileActions.doGetTreeRequest(id))
  }
    
  const RenderNode = () => {
    return tree?.data?.downlines?.map((item,i) => (
      <>
        <TreeNode key={i} label={
          <div className="flex items-center justify-center" onClick={() => handleGetDetailTree(item?.user_id)}>
            <div className="border rounded rounded-md p-5 justify-center w-24 h-30" style={{backgroundColor: renderColor(item?.user?.package?.name)}}>
              <p className="font-italic text-sm text-white pb-2">
              {
                tree?.data?.id === item?.referrer_id && 'Ref from : '+tree?.data?.referral_code
              }
              </p>
              <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
              <p className="font-medium text-md pt-2 text-white">{item?.user?.name?.length > 0 && item?.user?.name?.substring(0, 7)+' ...'}</p>
              <p className="font-italic text-sm text-white">{item?.user?.member_id}</p>
              <p className="font-italic text-sm text-white">{`${item?.user?.referral_code}-${tree?.data?.id}`}</p>
              <p className="font-italic text-sm text-white">{item?.user?.package?.name?.split(' ')[1]}</p>
            </div>
          </div>
        }>
          {item?.user?.downlines?.map((x,y) => (
            <>
              <TreeNode key={y} label={
                <div className="flex items-center justify-center" onClick={() =>  handleGetDetailTree(x?.user_id)}>
                 <div className="border rounded rounded-md p-5 w-24 h-30" style={{backgroundColor: renderColor(x?.user?.package?.name)}}>
                  <p className="font-italic text-sm text-white pb-2">
                  {
                    tree?.data?.id === x?.referrer_id && 'Ref from : '+tree?.data?.referral_code
                  }
                  </p>
                   <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                   <p className="font-medium text-md pt-2 text-white">{x?.user?.name?.length > 0 && x?.user?.name?.substring(0, 7)+' ...'}</p>
                   <p className="font-italic text-sm text-white">{x?.user?.member_id}</p>
                   <p className="font-italic text-sm text-white">{`${x?.user?.referral_code}-${tree?.data?.id}`}</p>
                   <p className="font-italic text-sm text-white">{x?.user?.package?.name?.split(' ')[1]}</p>
                 </div>
                </div>
              }>
                {x?.user?.downlines?.map((u,v) => (
                  <>
                    <TreeNode key={v} label={
                      <div className="flex items-center justify-center" onClick={() =>  handleGetDetailTree(u?.user_id)}>
                        <div className="border rounded rounded-md p-5" style={{backgroundColor: renderColor(u?.user?.package?.name)}}>
                          <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                          <p className="font-medium text-md pt-2 text-white">{u?.user?.name?.length > 0 && u?.user?.name?.substring(0, 7)+' ...'}</p>
                          <p className="font-italic text-sm text-white">{u?.user?.member_id}</p>
                          <p className="font-italic text-sm text-white">{`${u?.user?.referral_code}-${tree?.data?.id}`}</p>
                          <p className="font-italic text-sm text-white">{u?.user?.package?.name?.split(' ')[1]}</p>
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
          lineWidth={"2px"}
          lineColor={"black"}
          lineHeight={"40px"}
          nodePadding={"5px"}
          lineBorderRadius={"10px"}
          label={
            <div className="flex items-center justify-center" onClick={() => {}}>
              <div className="border rounded rounded-md p-5 jusify-center" style={{backgroundColor: renderColor(tree?.data?.package?.name)}}>
                <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                <p className="font-medium text-md pt-2 text-white">{tree?.data?.name}</p>
                <p className="font-italic text-sm text-white">{tree?.data?.member_id}</p>
                <p className="font-italic text-sm text-white">{tree?.data?.referral_code}</p>
                <p className="font-italic text-sm text-white">{tree?.data?.package?.name?.split(' ')[1]}</p>
              </div>
            </div>
          }>
          <RenderNode />
        </Tree>
    )
}

export default memo(OrgChart)