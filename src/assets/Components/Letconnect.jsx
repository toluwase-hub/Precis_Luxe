import React from "react";
import Button from "./Button";
import { MdWhatsapp } from "react-icons/md";
import DarkVeil from "./DarkVeil";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Letconnect = () => {
  return (
    <div className="overflow-hidden text-white relative my-10">
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.7}
          scanlineFrequency={0.5}
          warpAmount={0}
        />
      </div>

      <div className="contain relative py-15 gap-5   grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl">LET'S CONNECT</h1>
          <div>
            <p className="text-sm font-light">
              Have a Question or want to place an order?
            </p>
            <p className="text-sm font-light">Reach out to us directly.</p>
          </div>
          <div>
            <button className="bg-black text-white px-3 py-2 flex items-center justify-center gap-2 hover:bg-black/90 ">
              <MdWhatsapp size={25} /> ORDER ON WHATSAPP
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:items-center lg:text-center">
          <h1 className="text-3xl">
            <FaInstagram />
          </h1>
          <h1 className="font-bold text-2xl">INSTAGRAM</h1>
          <h1 className="text-sm  font-light">@precis_official</h1>
        </div>

        <div className="flex flex-col lg:items-center lg:text-center">
          <h1 className="text-3xl">
            <FaTiktok />
          </h1>
          <h1 className="font-bold text-2xl">TIKTOK</h1>
          <h1 className="text-sm  font-light">@precis_official</h1>
        </div>

        <div className="flex flex-col lg:items-center lg:text-center">
          <h1 className="text-3xl">📩</h1>
          <h1 className="font-bold text-2xl">EMAIL</h1>
          <h1 className="text-sm  font-light">@precis_official.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Letconnect;
