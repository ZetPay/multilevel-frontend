import React from "react";

// components

export default function CardProfile(props) {
  const { name, downline, paket } = props
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/team-2-800x800.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 mt-6">
                {name}
              </h3>
              <div className="flex justify-center py-2 lg:pt-4">
                <table class="shadow-lg bg-white border-collapse w-full mb-4">
                  <tr>
                    <th class="bg-blue-100 border text-center px-2 py-4">Kiri</th>
                    <th class="bg-blue-100 border text-center px-2 py-4">Paket</th>
                    <th class="bg-blue-100 border text-center px-2 py-4">Kanan</th>
                  </tr>
                  <tr>
                    <td class="border px-2 py-4">{`${downline?.[0]?.user?.name.substring(0, 5)}...`}</td>
                    <td class="border px-2 py-4">{paket}</td>
                    <td class="border px-2 py-4">{`${downline?.[1]?.user?.name.substring(0, 5)}...`}</td>
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
