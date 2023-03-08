import React from 'react'

const CardContainer = (props) => {
  const {restProps, name} = props
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 text-center mt-20">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 mt-6">
                {name}
              </h3>
              <div className="flex justify-center py-2 lg:pt-4">
                {restProps}
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default CardContainer