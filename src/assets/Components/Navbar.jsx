import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancelPresentation } from "react-icons/md";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ cart, showCart, setShowCart }) => {
  const [mobile, setMobile] = useState(false);

  const [navBackground, setNavBackGround] = useState(false);

  const [active, setActive] = useState("Home");
   
 const closeHomeLink = ()=> {
       setActive("Home")
        setMobile(!mobile)
 }

 const closeShopLink = ()=> {
        setActive("Shop")
        setMobile(!mobile)
 }

 const closeCollectionLink = ()=> {
       setActive("Collection")
       setMobile(!mobile)
 }

 const closeAboutLink = ()=> {
       setActive("About")
      setMobile(!mobile)
 }

 const closeContactLink = ()=> {
     setActive("Contact")
    setMobile(!mobile)
 }

  // nav background changing on scroll
  useEffect(() => {
    const Show = () => {
      if (window.scrollY > 100) {
        setNavBackGround(true);
      } else {
        setNavBackGround(false);
      }
    };
    window.addEventListener("scroll", Show);

    return () => {
      window.removeEventListener("scroll", Show);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full  ${navBackground ? "bg-white text-black transition-all duration-200 shadow-xl" : "bg-transparent text-white"}`}
    >
      <div>
        {/* tablet and mobile navlinks */}

        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 zoom-101 z-50 absolute w-[90%] h-screen bg-white text-black pt-5 ${navBackground ? "text-black" : "bg-black/80"} ${mobile ? "translate-x-0" : "-translate-x-300"}`}
        >
          <div className=" w-[90%] mx-auto py-5 flex justify-between">
            <div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#Home"
                    onClick={closeHomeLink}
                    className={`${active === "Home" ? "text-red-500 " : "text-black"}`}
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#Shop"
                    onClick={closeShopLink}
                    className={`${active === "Shop" ? "text-red-500" : "text-black"}`}
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    href="#Collection"
                    onClick={closeCollectionLink}
                    className={`${active === "Collection" ? "text-red-500" : "text-black"}`}
                  >
                    COLLECTIONS
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    onClick={closeAboutLink}
                    className={`${active === "About" ? "text-red-500" : "text-black"}`}
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    onClick={closeContactLink}
                    className={`${active === "Contact" ? "text-red-500" : "text-black"}`}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
              <div className="py-5">
                <IoPersonOutline size={20} />
              </div>

              <div className="flex  gap-3 absolute bottom-10">
                <Button
                  buttontext="SHOP HODDIES"
                  bgcolor="black"
                  textcolor="white"
                />

                <buttton className="border border-black py-2 px-3 rounded text-sm font-semibold">
                  SHOP JOGGERS
                </buttton>
              </div>
            </div>

            <div onClick={() => setMobile(!mobile)}>
              {" "}
              <MdOutlineCancelPresentation size={21} />{" "}
            </div>
          </div>
        </nav>

        {/* desktop nav */}
        <nav className={`contain flex items-center justify-between py-3 `}>
          <div>
            <h1 className="font-bold text-4xl italic hidden lg:block">
              PRECIS<span className="font-light text-sm italic">LUXE</span>
            </h1>
            <h1 className="lg:hidden" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <MdOutlineCancelPresentation size={21} />
              ) : (
                <AiOutlineMenu size={21} />
              )}
            </h1>
          </div>

          <div>
            <ul className="gap-6 hidden lg:flex">
              <li>
                <a
                  href="#Home"
                  onClick={() => setActive("Home")}
                  className={`${active === "Home" ? "text-red-500 " : "text-black"} ${navBackground ? "text-black" : "text-white"} `}
                >
                  HOME
                </a>{" "}
                <div
                  className={`h-0.5 rounded-tr-full rounded-bl-full bg-red-500 transition-all duration-400 ${active === "Home" ? "max-w-full" : "max-w-0"}`}
                ></div>
              </li>
              <li>
                <a
                  href="#Shop"
                  onClick={() => setActive("Shop")}
                  className={`${active === "Shop" ? "text-red-500" : "text-black"} ${navBackground ? "text-black" : "text-white"} `}
                >
                  SHOP
                </a>{" "}
                <div
                  className={`h-0.5 rounded-tr-full rounded-bl-full bg-red-500 transition-all duration-400 ${active === "Shop" ? "max-w-full" : "max-w-0"}`}
                ></div>
              </li>
              <li>
                <a
                  href="#Collection"
                  onClick={() => setActive("Collection")}
                  className={`${active === "Collection" ? "text-red-500" : "text-black"}  ${navBackground ? "text-black" : "text-white"}`}
                >
                  COLLECTIONS
                </a>{" "}
                <div
                  className={`h-0.5 rounded-tr-full rounded-bl-full bg-red-500 transition-all duration-400 ${active === "Collection" ? "max-w-full" : "max-w-0"}`}
                ></div>
              </li>
              <li>
                <a
                  href="#About"
                  onClick={() => setActive("About")}
                  className={`${active === "About" ? "text-red-500" : "text-black"}  ${navBackground ? "text-black" : "text-white"}`}
                >
                  ABOUT
                </a>{" "}
                <div
                  className={`h-0.5 rounded-tr-full rounded-bl-full bg-red-500 transition-all duration-400 ${active === "About" ? "max-w-full" : "max-w-0"}`}
                ></div>
              </li>
              <li>
                <a
                  href="#Contact"
                  onClick={() => setActive("Contact")}
                  className={`${active === "Contact" ? "text-red-500" : "text-black"}  ${navBackground ? "text-black" : "text-white"}`}
                >
                  CONTACT
                </a>{" "}
                <div
                  className={`h-0.5 rounded-tr-full rounded-bl-full bg-red-500 transition-all duration-400 ${active === "Contact" ? "max-w-full" : "max-w-0"}`}
                ></div>
              </li>
            </ul>

            <h1 className="font-bold text-2xl md:3xl italic lg:hidden">
              PRECIS<span className="font-light text-sm italic">LUXE</span>
            </h1>
          </div>

          <div className="flex gap-3">
            <CiSearch size={20} />
            <div className="hidden lg:block">
              <IoPersonOutline size={20} />
            </div>
            <div
              onClick={() => setShowCart(!showCart)}
              className="flex relative"
            >
              <FaShoppingCart size={20} />{" "}
              <div className={`bg-red-500 w-3 h-3 absolute -right-1 rounded-full flex items-center justify-center text-sm text-white ${cart.length >= 10 ? "px-2.5 py-2.5" : "px-2 py-2"} `}>
                {cart.length}
              </div>

             { !showCart && ( <span className={`animate-bounce px-2 py-1 rounded text-right fixed top-18 bg-white text-black right-4 text-sm font-extralight w-[40%] lg:w-[12%] md:w-[20%]`}><h1>{ cart.length > 1 ? "Click the cart icon to view your added  items" :  "Click the cart icon to view your added  item"}</h1></span> )
}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
