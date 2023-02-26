import React, { memo } from 'react'

const Option = (props) => {
  const { label, placeholder, data, ...restProps } = props;
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
          <option label={placeholder} value="default" ></option>
          {data.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
    </>
  )
}

export default memo(Option)