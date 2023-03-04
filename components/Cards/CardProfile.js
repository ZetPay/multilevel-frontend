import React from "react";

// components

export default function CardProfile(props) {
  const { name, downline } = props
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
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {downline?.[0]?.user?.name}
                  </span>
                  <span className="text-sm text-blueGray-400">KIRI</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    VIP
                  </span>
                  <span className="text-sm text-blueGray-400">PAKET</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  {downline?.[1]?.user?.name ? downline?.[1]?.user?.name : "-"}
                  </span>
                  <span className="text-sm text-blueGray-400">KANAN</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
