import React, { memo } from 'react'

const Option = (props) => {
  const { label, placeholder, children, ...restProps } = props;
  return (
    <>
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password">
          {label}
        </label>
        <select 
          {...restProps} 
          className="border-1 border-gray-300 appearance-none w-full px-3 py-3 bg-white rounded">
          {children}
        </select>
    </>
  )
}

export default memo(Option)