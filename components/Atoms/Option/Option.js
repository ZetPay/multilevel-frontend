import React, { memo } from 'react'

const Option = (props) => {
  const { label, placeholder, data } = props;
  return (
    <>
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password">
          {label}
        </label>
        <select className="border-0 appearance-none w-full px-3 py-3 bg-white rounded" name="whatever" id="frm-whatever">
          <option label={placeholder} ></option>
          {data.map((item, index) => (
            <option value={index}>{item}</option>
          ))}
        </select>
    </>
  )
}

export default memo(Option)