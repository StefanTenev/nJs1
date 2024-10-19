import React from 'react'

export default function Input({children}: any) {
  return (
    <label className='grid '>
            <span>{children}:</span>
            <input className="border border-solid border-black focus:border-blue-400 self-end justify-self-end  rounded-md "/>
    </label>
  )
}
