import React from "react";
import CountdownTimer from "./CountdownTimer";
import { ConnectKitButton } from "connectkit";
import { Image } from "@nextui-org/react";
// import Ghostie from "../../public/Images/BG-Header.png"

const Ticket = () => {
  return (
    <div
      className="flex justify-between bg-cover items-center bg-[url('../../public/Images/BG-Header.png')] text-sm py-7 px-10 rounded-3xl"
      style={{
        outlineStyle: "solid",
        outlineWidth: "2px",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="mr-10" id="div-2">
        <div className="text-white text-xl max-w-[25.00rem] mb-2">
          There are currently ...
        </div>

        <div>
          <h2 className="text-amber-500 text-5xl font-extrabold mb-5">
            162,613.19 USDC
            <a className="text-white text-4xl font-extrabold mb-3 ml-4">
              in Prize Pot!
            </a>
          </h2>
        </div>
        <div className="text-white text-xl mb-2 mt-8">
          Connect your wallet to get tickets for the next round #1144 now!
        </div>

        <ConnectKitButton />

        <div className="text-white text-xl max-w-[25.00rem] mb-2 mt-12">
          1 Ticket = 10 USD
          <a className="text-[#DCCACE]">(~ 10.01 USDC)</a>
        </div>
      </div>
      <div className="items-center flex-col flex">
        <CountdownTimer />

        <div
          className="flex item-center text-white text-sm  max-w-[25.00rem] mb-2 mt-12"
          style={{ textDecorationLine: "underline" }}
        >
          How to play?
          <Image className="ml-1 pt-1" alt="" src="/Svg/message.svg" />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
