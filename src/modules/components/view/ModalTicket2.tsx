import CalendarIcon from "@/components/Icon/CalendarIcon";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import React from "react";
import ModalTicket3 from "./ModalTicket3";
type ModalTicket2Types = {
  ticket: string;
  date: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });
const result = [
  { id: 1, result: "163718", prize: { prize: "0", match: "0" } },
  { id: 2, result: "163057", prize: { prize: "328.76", match: "3" } },
];
const ModalTicket2 = ({
  ticket,
  date,
  isOpen,
  onOpenChange,
  onClose,
}: ModalTicket2Types) => {
  const filterResult = result.filter((item) => item.prize.prize !== "0");
  const {
    isOpen: isOpenWithdraw,
    onOpen,
    onOpenChange: onOpenChangeWithDraw,
    onClose: onCloseWithDraw,
  } = useDisclosure();
  const renderResultById = result.map((item) => (
    <div key={item.id}>
      <h6 className="text-xs font-semibold text-primary">
        #{item.id > 9 ? item.id : `0${item.id}`}
      </h6>
      <div className="my-2 w-full rounded-2xl border-1 border-primary border-opacity-20 shadow flex">
        <div className="flex py-[14px] px-8 gap-1">
          {Array.from(item.result).map((value, index: number) => (
            <div
              key={index}
              className="w-[33px] h-[33px] p-2.5 text-lg font-semibold bg-primary bg-opacity-40 rounded-full text-white flex justify-center items-center"
            >
              {value}
            </div>
          ))}
        </div>
        <Divider
          orientation="vertical"
          className="w-[1px] bg-primary py-0 h-[63px] bg-opacity-20"
        />
        <div className="flex py-[14px]  justify-center items-center w-full">
          {item.prize.prize === "0" ? (
            <h6 className="text-primary-foreground font-semibold text-xs">
              No prize
            </h6>
          ) : (
            <div className="text-right">
              <h6 className=" text-primary-foreground text-[10px] font-normal">
                Matched {item.prize.match}
              </h6>
              <h6 className="text-primary font-bold text-xs">
                +{item.prize.prize} USDC
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        className={`${quicksand.className}`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="pt-8 flex flex-col space-y-3">
                <h2 className="text-xl font-semibold">
                  Ticket ID <span className="ml-3 text-primary">#{ticket}</span>
                </h2>
                <div className="border-b border-dashed border-divider w-full" />
                <div className="space-y-1">
                  <h6 className="flex gap-1 text-primary-foreground text-sm font-normal">
                    <CalendarIcon />
                    {date}
                  </h6>
                  <h6 className=" text-primary-foreground text-sm font-normal">
                    Total numbers :{" "}
                    <span className="text-primary ml-1 font-semibold">2</span>
                  </h6>
                  <h6 className=" text-primary-foreground text-sm font-normal">
                    Price :{" "}
                    <span className="text-primary ml-1 font-semibold ">
                      20 USDC
                    </span>
                  </h6>
                </div>
                <div className="border-b border-dashed border-divider w-full" />
              </ModalHeader>

              <ModalBody>
                <div>
                  <h4 className="text-base font-semibold">Prize results</h4>
                  {filterResult.length === 0 ? (
                    <div className="bg-[#ECECEC] bg-opacity-80 flex flex-col justify-center items-center rounded-2xl mt-1 mb-4 py-5 space-y-2">
                      <h6 className="text-base font-semibold">
                        No prizes in this round ...
                        <br /> Better luck next time!
                      </h6>
                      <Image
                        src="/Images/no-win.png"
                        alt="no-win"
                        width={81}
                        height={107}
                      />
                    </div>
                  ) : (
                    <div className="bg-primary bg-opacity-15 flex flex-col justify-center items-center rounded-2xl mt-1 mb-4 py-5 space-y-2">
                      <h5 className="text-base font-semibold">
                        Congratulations! You won
                      </h5>
                      <div>
                        <Image
                          src="/Images/winning.png"
                          alt="winning-image"
                          width={75}
                          height={81}
                        />
                      </div>
                      <h1 className=" text-4xl text-primary font-bold">
                        328.76 USDC
                      </h1>
                      <h6 className="text-sm font-normal text-primary">
                        ~ $328.76{" "}
                      </h6>
                    </div>
                  )}

                  <h4 className="text-base font-semibold text-center">
                    Won<span className="text-primary mx-1 font-bold">{1}</span>{" "}
                    prizes
                  </h4>
                </div>
                {renderResultById}
              </ModalBody>
              <ModalFooter className="py-6 ">
                <Button
                  className="bg-[#1E1E1E] text-white w-full font-normal"
                  onClick={onOpen}
                >
                  Withdraw
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ModalTicket3
        isOpen={isOpenWithdraw}
        onOpenChange={onOpenChangeWithDraw}
        onClose={onCloseWithDraw}
      />
    </>
  );
};

export default ModalTicket2;
