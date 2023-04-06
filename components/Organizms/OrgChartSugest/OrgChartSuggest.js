import Button from 'components/Atoms/Button/Button';
import Router from 'next/router'
import React, { useEffect, memo, useState } from 'react'
import { Tree, TreeNode } from "react-organizational-chart";
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from 'store/redux/profileReducer';

const OrgChartSugest = () => {
  const dispatch = useDispatch();
  const { tree: { data } } = useSelector(state => state.profileReducer)
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
        position: "right",
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
                    position: "right",
                    user: {
                      id: 180,
                      downlines: []
                    }
                  },
                  {
                    id: 0,
                    position: "left",
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
        position: "left",
        user: {
          id: 173,
          downlines: [
            {
              id: 1,
              position: "right",
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
              position: "left",
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
  },[])

  const handleGetDetailTree = id => {
    dispatch(ProfileActions.doGetTreeRequest({id}))
  }

  const RenderNodeOne = (v_one,i) => {
    if(renderdata?.downlines?.[i]?.position === "left"){
      return (
        <>
          <p className="font-italic text-sm text-white pb-2">
          {
            renderdata?.id === renderdata?.downlines?.[i]?.referrer_id && 'Ref from : '+renderdata?.referral_code
          }
          </p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{renderdata?.downlines?.[i]?.user?.name?.length > 0 && renderdata?.downlines?.[i]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${renderdata?.downlines?.[i]?.user?.referral_code}-${renderdata?.id}`}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.package?.name?.split(' ')[1]}</p>
        </>
      )
    }

    if(renderdata?.downlines?.[i]?.position === "right"){
      return (
        <>
          <p className="font-italic text-sm text-white pb-2">
          {
            renderdata?.id === renderdata?.downlines?.[i]?.referrer_id && 'Ref from : '+renderdata?.referral_code
          }
          </p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{renderdata?.downlines?.[i]?.user?.name?.length > 0 && renderdata?.downlines?.[i]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${renderdata?.downlines?.[i]?.user?.referral_code}-${renderdata?.id}`}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.package?.name?.split(' ')[1]}</p>
        </>
      )
    }

    return (
      <>
        <p className="font-medium text-md pt-2 text-black mb-3">DAFTAR</p>
        <Button label={v_one?.position} onClick={() =>{
          Router.push({
            pathname: 'newmember',
            query: { ref: renderdata?.referral_code, position:  v_one?.position},
          })
        }} type="submit" />
      </>
    )
  }
  
  const RenderNodeTwo = (v_two,y,i) => {
    if(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.position === "left"){
      return (
        <>
          <p className="font-italic text-sm text-white pb-2">
          {
            renderdata?.id === renderdata?.downlines?.[i]?.user?.downlines?.[y]?.referrer_id && 'Ref from : '+renderdata?.referral_code
          }
          </p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.name !== undefined && renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.referral_code}-${renderdata?.id}`}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.package?.name?.split(' ')[1]}</p>
        </>
      )
    }

    if(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.position === "right"){
      return (
        <>
          <p className="font-italic text-sm text-white pb-2">
          {
            renderdata?.id === renderdata?.downlines?.[i]?.user?.downlines?.[y]?.referrer_id && 'Ref from : '+renderdata?.referral_code
          }
          </p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.name !== undefined && renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.referral_code}-${renderdata?.id}`}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.package?.name?.split(' ')[1]}</p>
        </>
      )
    }

    return (
      <>
        <p className="font-medium text-md pt-2 text-black mb-3">DAFTAR</p>
        <Button label={v_two?.position} onClick={() =>{
            Router.push({
              pathname: 'newmember',
              query: { ref: `${renderdata?.downlines?.[v_two.id]?.user?.referral_code}-${renderdata?.id}`, position:  v_two?.position},
            })
          }} type="submit" />
      </>
    )
  } 

  const RenderNodeThre = (v_thre,v,y,i) => {
    if(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.position === "left"){
      return (
        <>
          <p className="font-italic text-sm text-white pb-2">
          {
            renderdata?.id === renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.referrer_id && 'Ref from : '+renderdata?.referral_code
          }
          </p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.name !== undefined && renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.referral_code}-${renderdata?.id}`}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.package?.name?.split(' ')[1]}</p>
        </>
      )
    }

    if(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.position === "right"){
      return (
        <>
          <p className="font-italic text-sm text-white pb-2">
          {
            renderdata?.id === renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.referrer_id && 'Ref from : '+renderdata?.referral_code
          }
          </p>
          <img className="w-12 h-12 rounded rounded-full mx-auto" src="/img/team-1-800x800.jpg" />
          <p className="font-medium text-md pt-2 text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.name !== undefined && renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.name?.substring(0, 7)+' ...'}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.member_id}</p>
          <p className="font-italic text-sm text-white">{`${renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.referral_code}-${renderdata?.id}`}</p>
          <p className="font-italic text-sm text-white">{renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines[v]?.user?.package?.name?.split(' ')[1]}</p>
        </>
      )
    }

    return (
      <>
        <p className="font-medium text-md pt-2 text-black mb-3">DAFTAR</p>
        <Button label={v_thre?.position} onClick={() =>{
            Router.push({
              pathname: 'newmember',
              query: { ref: `${renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.referral_code}-${renderdata?.id}`, position:  v_thre?.position},
            })
          }} type="submit" />
      </>
    )
  } 
    
  const RenderNode = () => {
    return suggest?.downlines?.map((v_one,i) => ( 
      <>
        <TreeNode key={i} label={
          <div className="flex items-center justify-center" onClick={() => handleGetDetailTree(renderdata?.downlines?.[i]?.user_id)}>
            <div 
              className="border border-gray-300 rounded rounded-md p-5 justify-center items-center"  
              style={{backgroundColor: renderdata?.downlines?.[i]?.user?.package?.name !== undefined ? 
              renderColor(renderdata?.downlines?.[i]?.user?.package?.name) : 'white', width: 170, height: 220}}>
              {RenderNodeOne(v_one,i)}
            </div>
          </div>
        }>
          {v_one?.user?.downlines?.map((v_two,y) => (
            <>
              <TreeNode key={y} label={
                <div className="flex items-center justify-center" onClick={() =>  handleGetDetailTree(renderdata?.downlines?.[y]?.user?.downlines?.[y]?.user_id)}>
                 <div 
                  className="border rounded rounded-md p-5 w-24 h-30" 
                  style={{backgroundColor: renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.package?.name !== undefined ? 
                  renderColor(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.package?.name) : 'white', width: 170, height: 220}}>
                  { RenderNodeTwo(v_two,y,i) }
                 </div>
                </div>
              }>
                {v_two?.user?.downlines?.map((v_tree,v) => (
                  <>
                    <TreeNode key={v} label={
                      <div className="flex items-center justify-center" onClick={() =>  handleGetDetailTree(v_tree?.user_id)}>
                        <div className="border rounded rounded-md p-5" 
                          style={{backgroundColor: renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines?.[v]?.user?.package?.name !== undefined ? 
                          renderColor(renderdata?.downlines?.[i]?.user?.downlines?.[y]?.user?.downlines?.[v]?.user?.package?.name) : 'white', width: 170, height: 220}}>
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
                <p className="font-italic text-sm text-white">{data?.referral_code}</p>
                <p className="font-italic text-sm text-white">{data?.package?.name?.split(' ')[1]}</p>
              </div>
            </div>
          }>
          <RenderNode />
        </Tree>
    )
}

export default memo(OrgChartSugest)