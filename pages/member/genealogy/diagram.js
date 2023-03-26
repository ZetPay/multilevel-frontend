import Member from 'layouts/Member';
import React, { useEffect } from 'react'
import { Tree, TreeNode } from "react-organizational-chart";
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from 'store/redux/profileReducer';

export default function Diagram() {
  const dispatch = useDispatch();
  const { tree } = useSelector(state => state.profileReducer)
  const color = {
    silver: "#c0c0c0",
    gold: "#d4af37",
    diamond: "#61e2ff",
  }

  const renderColor = (param) => {
    const paket = param?.split(' ')[1].toLowerCase()
    const pakets = param?.toLowerCase().includes("gold")
    console.log("PAKET",paket)

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
        <div className="flex flex-wrap">
            <div className="overflow-x-scroll w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Diagram Tree</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div className="overflow-x-scroll flex px-4 lg:px-10 py-10 pt-0 bg-white h-100 border border-red-200 justify-center">
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
                </div>
              </div>
            </div>
        </div>
    )
}

Diagram.layout = Member;
