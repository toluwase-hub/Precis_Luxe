import React from "react";
import DarkVeil from "./DarkVeil";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";

const Off = () => {
  return (
    <div className=" py-10 my-10 overflow-hidden text-white relative ">
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

      <div className="relative pt-12 pb-5">
        <h1 className="contain font-bold text-4xl pb-8">
          WHY PRECIS<span className="text-sm font-light italic">_LUXE</span>
        </h1>
        <div className="contain grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-around">
          <div className="flex items-center lg:justify-center gap-3 lg:border-r pb-3 pr-8 border-b lg:border-b-0 border-black/20 ">
            <div className="text-4xl">💸</div>
            <div>
              <h1 className="font-bold text-lg">5% OFF</h1>
              <h1 className="font-light">On Order over #20,000</h1>
            </div>
          </div>

          <div className="flex items-center lg:justify-center gap-3 lg:border-r lg:border-b-0 pr-8 pb-3 border-b border-black/20">
            <div className="text-4xl">
              <TbTruckReturn />
            </div>
            <div>
              <h1 className="font-bold text-lg">EASY RETURNS</h1>
              <h1 className="font-light">30 days return policy</h1>
            </div>
          </div>

          <div className="flex items-center lg:justify-center gap-3 lg:border-r pb-3 pr-8 border-b lg:border-b-0 border-black/20">
            <div className="text-4xl">
              <RiSecurePaymentLine />
            </div>
            <div>
              <h1 className="font-bold text-lg">SECURE PAYMENT</h1>
              <h1 className="font-light">100% secure checkout</h1>
            </div>
          </div>

          <div className="flex items-center lg:justify-center gap-3 md:border-b pb-3 lg:border-b-0 border-black/20">
            <div className="text-4xl">🕛</div>
            <div>
              <h1 className="font-bold text-lg">24/7 SUPPORT</h1>
              <h1 className="font-light">We're here to help</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Off;
