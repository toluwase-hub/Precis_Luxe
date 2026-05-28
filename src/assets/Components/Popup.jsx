import React from 'react'
import Button from './Button'
import { MdOutlineCancelPresentation } from "react-icons/md";

const Popup = (props) => {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-black/40 fixed top-0 z-50'>
        <div className='bg-white rounded shadow-2xl py-3 pt-2  px-2 w-[75%] lg:w-[30%]'>
                <div className='flex justify-end text-3xl pb-5'> 
                    <button onClick={props.action}>< MdOutlineCancelPresentation /></button>
                </div>
            <div className=' flex flex-col items-center justify-center border-b border-gray-300 gap-2  pb-2'>
                <div className='text-5xl'>{props.icon}</div>
                <div className='py-2 text-center font-semibold '>{props.notification}</div>
                <div className='text-center text-sm font-light'>{props.subtext}</div>
            </div>

            <div className='flex items-center justify-around pt-10'>
              <div>{props.button1}</div>
              <div><button onClick={props.button2action}>Cancel</button></div>    
            </div>
        </div>
    </div>
  )
}

export default Popup