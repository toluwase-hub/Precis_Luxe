import React from 'react'
import { MdWhatsapp } from "react-icons/md";

const Whatsappicon = () => {

  
    const PhoneNumber = '+2349043933210' ;
    const message = 'Hello, Dev%20Tee%20i%20came%20across%20Your%20Portfolio%20and%20wanted%20reach%20out!';
    const whatsappurl = `https://wa.me/${PhoneNumber}?text=${message}`;
  
  return (
    <div className='fixed bottom-5 left-2 z-40'>
      <a href={whatsappurl}>
        <div className='w-4 h-4 bg-red-600 rounded-full animate-pulse absolute -right-1 -top-1'></div>
      <div><MdWhatsapp size={60} className=' bg-conic from-green-700 via-green-400 to-green-700  text-white p-2 rounded-2xl ' /></div>  
      </a>
    </div>
  )
}

export default Whatsappicon