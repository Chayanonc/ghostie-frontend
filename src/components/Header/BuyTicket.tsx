import React from "react";
import {
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { ConnectKitButton } from "connectkit";
import CountdownTimer from "./CountdownTimer";

const BuyTicket = () => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[317px] w-full">
      <CardHeader className="justify-between absolute z-10 top-1 flex-row !items-start p-10">
        <div>
          <div className="text-white text-xl max-w-[25.00rem] mb-2">
            There are currently ...
          </div>
          <div>
            <h2 className="text-amber-500 text-5xl font-extrabold">
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

          <div className="text-white text-xl max-w-[25.00rem] mb-2 mt-2">
            1 Ticket = 10 USD
            <a className="text-[#DCCACE]">(~ 10.01 USDC)</a>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <CountdownTimer />
          <div
            className="flex justify-center text-white text-sm  max-w-[25.00rem] mb-2 mt-1 underline"
          >
            How to play?
            <Image
              alt="messaged"
              className="ml-1 pt-1"
              src="/Svg/message.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/Images/bg-header.png"
        width={678}
        height="100%"
      />
    </Card>
  );
};

export default BuyTicket;
