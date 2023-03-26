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
    dispatch(ProfileActions.doGetTreeRequest())
  },[])
    
  const RenderNode = () => {
    return tree?.data?.downlines?.map((item,i) => (
      <>
        <TreeNode key={i} label={
          <div className="flex items-center justify-center" onClick={() => alert("hii")}>
            <div className="border rounded rounded-md p-5 justify-center" style={{backgroundColor: renderColor(item?.user?.deposit?.name)}}>
              <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
              <p className="font-medium text-md pt-2 text-white">{item?.user?.name?.length > 0 && item?.user?.name?.substring(0, 7)+' ...'}</p>
              <p className="font-italic text-sm text-white">{item?.user?.deposit?.name?.split(' ')[1]}</p>
            </div>
          </div>
        }>
          {item?.user?.downlines?.map((x,y) => (
            <>
              <TreeNode key={y} label={
                <div className="flex items-center justify-center" onClick={() => alert("hii")}>
                 <div className="border rounded rounded-md p-5" style={{backgroundColor: renderColor(x?.user?.deposit?.name)}}>
                   <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                   <p className="font-medium text-md pt-2 text-white">{x?.user?.name?.length > 0 && x?.user?.name?.substring(0, 7)+' ...'}</p>
                   <p className="font-italic text-sm text-white">{x?.user?.deposit?.name?.split(' ')[1]}</p>
                 </div>
                </div>
              }>
                {x?.user?.downlines?.map((u,v) => (
                  <>
                    <TreeNode label={
                      <div className="flex items-center justify-center" onClick={() => alert("hii")}>
                        <div className="border rounded rounded-md p-5" style={{backgroundColor: renderColor(u?.user?.deposit?.name)}}>
                          <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                          <p className="font-medium text-md pt-2 text-white">{u?.user?.name?.length > 0 && u?.user?.name?.substring(0, 7)+' ...'}</p>
                          <p className="font-italic text-sm text-white">{u?.user?.deposit?.name?.split(' ')[1]}</p>
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
            <div className="flex items-center justify-center" onClick={() => alert("hii")}>
              <div className="border rounded rounded-md p-5 jusify-center" style={{backgroundColor: renderColor(tree?.data?.deposit?.name)}}>
                <img className="w-16 h-16 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
                <p className="font-medium text-md pt-2 text-white">{tree?.data?.name}</p>
                <p className="font-italic text-sm text-white">{tree?.data?.deposit?.name?.split(' ')[1]}</p>
              </div>
            </div>
          }>
          <RenderNode />
        </Tree>
    )
}

export default memo(OrgChart)