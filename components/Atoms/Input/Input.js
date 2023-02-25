import React, { memo } from 'react'

const Input = (props) => {
  const { label, type, placeholder } = props;
  return (
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password">
        {label}
      </label>
      <input
        type={type}
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow-xs focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder={placeholder}
      />
    </>
  )
}

export default memo(Input)