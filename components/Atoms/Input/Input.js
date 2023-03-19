import React, { memo } from 'react'

const Input = (props) => {
  const { label, type, placeholder, ...restProps } = props;

  const InputType = (type) => {
    switch(type){
      case 'text-area':
        return (
          <textarea 
            rows="4" 
            class="block p-3.5 border-1 border-gray-500 w-full rounded" 
            placeholder={placeholder}
            {...restProps}>
            
          </textarea>
        )
      default:
        return (
          <input
            type={type}
            className="border-1 border-gray-500 w-full rounded px-3 py-3"
            placeholder={placeholder}
            {...restProps}
          />
        )
    }
  }
  return (
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password">
        {label}
      </label>
      {InputType(type)}
    </>
  )
}

export default memo(Input)