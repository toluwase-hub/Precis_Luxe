import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancelPresentation } from "react-icons/md";
const Navbar = ({cart,showCart,setShowCart}) => {
    const [mobile, setMobile] = useState(false)

    const [navBackground, setNavBackGround] = useState(false)
    

    // nav background changing on scroll
    useEffect( () => {
    const Show = () =>{
      if(window.scrollY > 100){
        setNavBackGround(true)
      }  
      else{
        setNavBackGround(false)
      }
    }
    window.addEventListener('scroll', Show)

    return () => {
        window.removeEventListener('scroll', Show)
    }
 }, []);
    
  return (
    <div className={`fixed top-0 z-50 w-full  ${navBackground ? "bg-white text-black transition-all duration-200 shadow-xl" : "bg-transparent text-white"}`}>
       
        <div>
            

     {/* tablet and mobile navlinks */}

    <nav className={`lg:hidden overflow-hidden transition-all duration-350 zoom-101 z-50 absolute w-[90%] h-screen bg-black/80 pt-5 ${navBackground ? " bg-black/80 text-white" : "bg-black/80"} ${mobile ? "translate-x-0" : "-translate-x-110" }`}>
           <div className=' w-[90%] mx-auto py-5 flex justify-between'>
            <div>
                 <ul className='flex flex-col gap-3'>
                <li><a href="#Home">HOME</a></li>
                <li><a href="#Shop">SHOP</a></li>
                <li><a href="#Collection">COLLECTIONS</a></li>
                <li><a href="#About">ABOUT</a></li>
                <li><a href="#Contact">CONTACT</a></li>
            </ul> 
             <div className='py-5'><IoPersonOutline size={20} /></div> 

             <div className='flex  gap-3 absolute bottom-10'>
                <buttton  className="bg-white text-black py-3 px-3 rounded text-sm font-semibold">SHOP HOODIES</buttton>
                <buttton  className="border border-white text-white  py-3 px-3 rounded text-sm font-semibold">SHOP JOGGERS</buttton>
             </div>
            </div>
           
            <div onClick={()=> setMobile(!mobile)}> <MdOutlineCancelPresentation size={21} /> </div>

            </div>
        </nav>

     {/* desktop nav */}
        <nav className={`contain flex items-center justify-between py-3 `} >
           <div>
            <h1 className='font-bold text-4xl italic hidden lg:block'>PRECIS<span className='font-light text-sm italic'>LUXE</span></h1>
            <h1 className='lg:hidden' onClick={()=> setMobile(!mobile)}>{ mobile ? <MdOutlineCancelPresentation size={21} /> : <AiOutlineMenu size={21} />}</h1>
            </div> 

            <div>
                <ul className='gap-6 hidden lg:flex'>
                <li><a href="#Home">HOME</a></li>
                <li><a href="#Shop">SHOP</a></li>
                <li><a href="#Collection">COLLECTIONS</a></li>
                <li><a href="#About">ABOUT</a></li>
                <li><a href="#Contact">CONTACT</a></li>
            </ul>

             <h1 className='font-bold text-2xl md:3xl italic lg:hidden'>PRECIS<span className='font-light text-sm italic'>LUXE</span></h1>
            
            </div>
            
            <div className='flex gap-3'>
                <CiSearch size={20}/>
               <div className='hidden lg:block'><IoPersonOutline size={20} /></div> 
                <div onClick={()=> setShowCart(!showCart)} className='flex relative'><HiOutlineShoppingBag size={20} /> <div className='bg-red-500 w-3 h-3 absolute -right-1 rounded-full flex items-center justify-center px-2 py-2 text-white'>{cart.length}</div></div>
            </div>
        </nav>

       



        </div>
    </div>
  )
}

export default Navbar