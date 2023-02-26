import React, { memo } from 'react'

const Input = (props) => {
  const { label, type, placeholder, ...restProps } = props;
  return (
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password">
        {label}
      </label>
      <input
        type={type}
        className="border-1 border-red-500 w-full rounded px-3 py-3"
        placeholder={placeholder}
        {...restProps}
      />
    </>
  )
}

export default memo(Input)