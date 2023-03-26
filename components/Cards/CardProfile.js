import React, { useState } from "react";
import { useAlert } from "react-alert";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AiOutlineCopy } from "react-icons/ai";

// components

export default function CardProfile(props) {
  const alert = useAlert()
  const { name, downline, paket, referals, idmember, avatar } = props
  const [referal, setReferal] = useState(referals)
  const [idMmeber, setIdMember] = useState(idmember)
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={`http://bcastarx.com/${process.env.prefixs}/default/${avatar?.split('/')[2]}`}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 mt-6">
                {name}
              </h3>
              <p class="bg-blue-100 border px-2 py-4 flex row items-center">
                Referal <b className="w-full">{referals}</b>
                <CopyToClipboard text={referal}
                  onCopy={() =>{
                    alert.success("Referal coppied!")
                    setReferal(referals)
                  }}>
                  <AiOutlineCopy />
                </CopyToClipboard>
              </p>
              <p class="bg-blue-100 border px-2 py-4 flex row items-center">
                Member ID <b className="w-full">{idmember}</b>
                <CopyToClipboard text={idmember}
                  onCopy={() =>{
                    alert.success("Member Id coppied!")
                    setIdMember(idMmeber)
                  }}>
                  <AiOutlineCopy />
                </CopyToClipboard>
              </p>
              <div className="flex justify-center py-2 lg:pt-4">
                <table class="shadow-lg bg-white border-collapse w-full mb-4">
                  <tr>
                    <th class="bg-blue-100 border text-center px-2 py-4">{downline?.[0]?.position}</th>
                    <th class="bg-blue-100 border text-center px-2 py-4">Paket</th>
                    <th class="bg-blue-100 border text-center px-2 py-4">{downline?.[1]?.position}</th>
                  </tr>
                  <tr>
                    <td class="border px-2 py-4">{
                    `${downline?.[0]?.user?.name?.length > 0 ? downline?.[0]?.user?.name?.substring(0, 5) : ''}...`
                    }</td>
                    <td class="border px-2 py-4">{paket}</td>
                    <td class="border px-2 py-4">{
                    `${downline?.[1]?.user?.name?.length > 0 ? downline?.[1]?.user?.name?.substring(0, 5) : ''}...`
                    }</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
