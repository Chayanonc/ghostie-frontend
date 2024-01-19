import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

const Borrow = () => {
  return (
    // <Card isFooterBlurred radius="lg" className="border-none">
    //   <Image
    //     alt=""
    //     className="object-cover"
    //     src="/Images/bg-borrow.png"
    //     width={678}
    //     // height={273}
    //     height="100%"
    //   />
    //   <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    //     <p className="text-tiny uppercase font-bold">Daily Mix</p>
    //     <small className="text-default-500">12 Tracks</small>
    //     <h4 className="font-bold text-large">Frontend Radio</h4>
    //   </CardHeader>
    //   <CardBody className="overflow-visible py-2">
    //   <p className="text-tiny uppercase font-bold">Daily Mix</p>
    //     <small className="text-default-500">12 Tracks</small>
    //     <h4 className="font-bold text-large">Frontend Radio</h4>
    //   </CardBody>
    // </Card>
    <Card className="col-span-12 sm:col-span-4 h-full w-[678px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start p-10">
        <p className="flex-col inline-block">
          <span className="text-[#FFC64F] text-3xl font-medium inline-block ">
            Stake
          </span>
          <span className="text-white text-3xl font-medium mx-2 ">
            your ticket to
          </span>
          <span className="text-[#FFC64F] text-3xl font-medium ">
            get liquidity ddd
          </span>
        </p>
        <div className="flex-row">
          <p className="text-white font-extrabold mb-5">Maximum</p>
          <p className="text-[#FFC64F] font-extrabold mb-5">70%</p>
          <p className="text-white font-extrabold mb-5">of collateral</p>
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/Images/bg-borrow.png"
        width={678}
        // height={273}
        height="100%"
      />
    </Card>
  );
};

export default Borrow;
