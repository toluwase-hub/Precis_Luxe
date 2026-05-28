import React, { useEffect, useState } from "react";


import { FaArrowUp } from "react-icons/fa";

const Backtotop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const Show = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", Show);

    return () => {
      window.removeEventListener("scroll", Show);
    };
  }, []);

  const Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <div>
      {scroll && (
        <div className=" transition-all duration-300">
          <button
            onClick={Top}
            className="fixed bottom-5 text-3xl right-2 z-40  text-white bg-black  py-3 px-3 rounded-full shadow-lg "
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Backtotop;
