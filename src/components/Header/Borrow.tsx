import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import ModalBorrow from "../Modal/ModalBorrow";
import { ConnectKitButton } from "connectkit";

const Borrow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card className="col-span-12 sm:col-span-4 h-full w-1/2">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start p-10">
        <p className="">
          <span className="text-[#FFC64F] text-3xl font-medium inline-block ">
            Stake
          </span>
          <span className="text-white text-3xl font-medium mx-2 ">
            your ticket to
          </span>
          <span className="text-[#FFC64F] text-3xl font-medium ">
            get liquidity
          </span>
        </p>
        <p className="mt-6">
          <span className="text-white font-extrabold mb-5">Maximum</span>
          <span className="text-[#FFC64F] font-extrabold mb-5 mx-2">70%</span>
          <span className="text-white font-extrabold mb-5">of collateral</span>
        </p>
        <p className="text-[#FFC64F] font-extrabold mb-5 mt-5">APY 5.0 %</p>

        <ModalBorrow
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        ></ModalBorrow>

        <ConnectKitButton.Custom>
          {({ isConnected }) => {
            return (
              <div>
                {isConnected ? (
                  <>
                    {" "}
                    <Button
                      onClick={onOpen}
                      className="bg-black text-white w-[199px] h-[56px] shadow"
                      size="lg"
                    >
                      Borrow now !
                    </Button>
                  </>
                ) : (
                  <>
                    {" "}
                    <Button
                      isDisabled
                      className="bg-black text-white w-[199px] h-[56px] shadow"
                      size="lg"
                    >
                      Borrow now !
                    </Button>
                  </>
                )}
              </div>
            );
          }}
        </ConnectKitButton.Custom>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/Images/bg-borrow.png"
        width={678}
        height="100%"
      />
    </Card>
  );
};

export default Borrow;
