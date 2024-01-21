import BackIcon from "@/components/Icon/BackIcon";
import PriceIcon from "@/components/Icon/PriceIcon";
import TotalNumberIcon from "@/components/Icon/TotalNumberIcon";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Quicksand } from "next/font/google";
import React, { useState } from "react";
import ModalTicket2 from "./ModalTicket2";
type ModalTicket1Types = {
  round: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });
const tickets = [
  {
    id: "0539546",
    date: "Dec 05, 2023, 3:00 PM",
    totalNumber: "2",
    price: "20",
    prize: "0",
  },
  {
    id: "0539545",
    date: "Dec 05, 2023, 3:00 PM",
    totalNumber: "2",
    price: "20",
    prize: "1",
  },
];
const ModalTicket1 = ({
  round,
  isOpen,
  onOpenChange,
  onClose,
}: ModalTicket1Types) => {
  const {
    isOpen: isOpenTicket,
    onOpen,
    onOpenChange: onOpenChangeTicket,
    onClose: onCloseTicket,
  } = useDisclosure();
  const [ticket, setTicket] = useState<Record<string, string>>({});
  const renderTicket = tickets.map((item) => (
    <div
      key={item.id}
      className="relative min-h-[110px] py-0 mt-1 cursor-pointer"
      onClick={() => {
        setTicket(item);
        onOpen();
      }}
    >
      <picture>
        <img src="/Images/ticket.png" alt="bg-ticket" width="100%" />
      </picture>
      <div className="w-full p-4 absolute top-0">
        <div>
          <div className="flex justify-between mb-1">
            <h6 className="text-white text-xs font-semibold">
              Ticket ID <span className="font-normal">#{item.id}</span>
            </h6>
            <h6 className="text-xs font-semibold text-white">Win a prize</h6>
          </div>
          <h6 className="text-[10px] font-light text-white">
            Date: {item.date}
          </h6>
          <div className="mt-5 flex justify-between">
            <div className="flex gap-6">
              <h6 className="text-xs font-normal text-white flex gap-1">
                <TotalNumberIcon />
                Total numbers :{" "}
                <span className="text-[#FFC64F]">{item.totalNumber}</span>
              </h6>
              <h6 className="text-xs font-normal text-white flex gap-1">
                <PriceIcon />
                Price : <span className="text-[#FFC64F]">{item.price}</span>
              </h6>
            </div>
            <h6 className="text-xs font-normal text-[#FFC64F]">
              <span className="mr-1 font-semibold text-[#FFC64F]">
                {item.prize}
              </span>
              prize
            </h6>
          </div>
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
        hideCloseButton
        className={`${quicksand.className}`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="pt-8">
                <div className="w-full flex">
                  <div
                    onClick={onClose}
                    className="my-auto mr-2 cursor-pointer"
                  >
                    <BackIcon />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Round <span className="ml-2 text-gradient">#{round}</span>
                  </h2>
                </div>
              </ModalHeader>

              <ModalBody className="pt-0 pb-8">
                <div className="border-1 border-b border-dashed w-full" />
                <div className="space-y-3">
                  <h3 className=" text-xl font-semibold text-foreground">
                    Your Tickets
                  </h3>
                  <div className="flex justify-between">
                    <h6 className="text-base font-normal text-secondary-foreground">
                      Total your tickets
                    </h6>
                    <h6 className="text-base font-normal text-secondary-foreground">
                      2
                    </h6>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="text-base font-normal text-secondary-foreground">
                      Win a prize
                    </h6>
                    <h6 className="text-base font-normal text-secondary-foreground">
                      1
                    </h6>
                  </div>
                </div>
                <div className="border-1 border-b border-dashed w-full" />
                <div>
                  <h4 className=" font-semibold text-base text-foreground">
                    All Tickets
                  </h4>
                  {renderTicket}
                </div>
              </ModalBody>
              <ModalFooter className="py-6 w-full flex justify-center">
                <h6 className="font-normal text-xs text-primary-foreground">
                  Select a ticket to check your prize.
                </h6>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ModalTicket2
        ticket={ticket?.id || ""}
        date={ticket?.date || ""}
        totalTicket={ticket?.totalNumber}
        isOpen={isOpenTicket}
        onOpenChange={onOpenChangeTicket}
        onClose={onCloseTicket}
      />
    </>
  );
};

export default ModalTicket1;
