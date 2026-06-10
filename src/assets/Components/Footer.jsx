import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white py-2'>
        
      <div className='contain grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center gap-5 pt-20 pb-10'>

        <div className='lg:col-span-1 md:col-span-1 col-span-2'>
          <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-4xl italic  '>PRECIS<span className='font-light text-sm italic'>LUXE</span></h1>
          <div>
          <p>premium streetwear essentials</p>
         <p>designed for comfort and style.</p>
          </div>
         
          </div>


         <div className='flex gap-2 py-3 text-white/80'>
                <div className=' hover:scale-150 transition-all duration-200'>< FaTwitter size={15}/></div>
                <div className=' hover:scale-150 transition-all duration-200'>< CiFacebook size={15}/></div>
                <div className=' hover:scale-150 transition-all duration-200'> < FaLinkedin size={15}/></div>
                <div className=' hover:scale-150 transition-all duration-200'>< FaInstagram size={15}/></div>
                <div className=' hover:scale-150 transition-all duration-200'>< FaTiktok size={15}/></div>
            </div>
        </div>

        <div>
          <h1 className='font-bold text-xl'>SHOP</h1>
          <ul>
            <li  className='hover:underline'><a href="#Collection">Hoodies</a> </li>
            <li className='hover:underline'><a href="#Collection">Joggers</a> </li>
            <li className='hover:underline'><a href="#Shop">Sets</a> </li>
            <li className='hover:underline'><a href="#Collection">New Drops</a> </li>
            <li className='hover:underline'><a href="#Collection"> All Products</a></li>
          </ul>
        </div>

        <div>
          <h1 className='font-bold text-xl'>COMPANY</h1>
          <ul>
            <li className='hover:underline'><a href="#About"> About us</a></li>
            <li className='hover:underline'>Sue Guide</li>
            <li className='hover:underline'>Shipping</li>
            <li className='hover:underline'>Returns</li>
            <li className='hover:underline'>FAQ</li>
          </ul>

        </div>

         <div>
          <h1 className='font-bold text-xl'>HELP</h1>
          <ul>
            <li className='hover:underline'><a href="#Contact">Contact us</a> </li>
            <li className='hover:underline'>Track Order</li>
            <li className='hover:underline'>Privacy Policy</li>
            <li className='hover:underline'>Terms & Condition</li>
          </ul>

        </div>


         




      </div>

      <h1 className='text-center font-light text-sm relative pt-5 '>
        © 2026 <span>Precis_Luxe</span>. All rights reserved.
    </h1>
    <p className='text-center font-light text-sm '><a href="#">designed & developed by Teeweb Dev</a></p>

    </div>
  )
}

export default Footer