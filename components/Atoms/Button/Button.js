import React, { memo } from 'react'

const Button = (props) => {
    const { label, isFetching, ...restprops } = props;
  return (
    <>
      <button
        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 flex justify-center items-center"
        {...restprops}>
        {
          isFetching ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10" viewBox="0 0 25 25" fill="none"
                stroke="currentColor">
                <path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#ffff" stroke-width="1.2"/>
            </svg>
          ) : label
        }
      </button>
    </>
  )
}

export default memo(Button)