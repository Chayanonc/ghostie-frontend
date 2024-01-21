import BackIcon from "@/components/Icon/BackIcon";
import PriceIcon from "@/components/Icon/PriceIcon";
import TotalNumberIcon from "@/components/Icon/TotalNumberIcon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Quicksand } from "next/font/google";
import React, { useState } from "react";
type ModalConfirmTypes = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });
const tickets = [
  { id: "1", ticketNumber: "163718" },
  { id: "2", ticketNumber: "163719" },
];

const ModalConfirm = ({ isOpen, onOpenChange, onClose }: ModalConfirmTypes) => {
  const renderTicket = tickets.map((item, index: number) => (
    <div key={item.id}>
      <div className="flex justify-between">
        <div className="my-auto">
          <h6 className="text-xs font-semibold text-primary">
            #{Number(item.id) > 9 ? item.id : `0${item.id}`}
          </h6>
        </div>
        <div className="flex gap-2">
          {Array.from(item.ticketNumber).map((value, index: number) => (
            <div
              key={index}
              className="w-[33px] h-[33px] p-2.5 text-lg font-semibold bg-primary bg-opacity-40 rounded-full text-white flex justify-center items-center"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="border-1 border-b border-dashed w-full mt-3" />
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
                <h4 className=" text-xl font-semibold text-secondary-foreground">
                  Confirm tickets
                </h4>
              </ModalHeader>

              <ModalBody className="pt-0 pb-8">
                {renderTicket}
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between">
                    <h6 className="text-sm font-normal text-secondary-foreground">
                      Total
                    </h6>
                    <h6 className="text-sm font-normal text-secondary-foreground">
                      2 Ticket
                    </h6>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="text-sm font-normal text-secondary-foreground">
                      Price
                    </h6>
                    <h6 className="text-sm font-normal text-secondary-foreground">
                      10.00 USDC
                    </h6>
                  </div>
                </div>
                <div className="border-1 border-b border-dashed w-full" />
                <div className="flex justify-between">
                  <h6 className="text-base font-semibold text-secondary-foreground">
                    Price
                  </h6>
                  <h6 className="text-base font-bold text-primary">
                    10.00 USDC
                  </h6>
                </div>
              </ModalBody>
              <ModalFooter className="pb-6 pt-10 justify-between">
                <Button
                  onClick={onClose}
                  className="border border-[#1E1E1E] bg-white text-secondary-foreground w-full font-normal"
                >
                  Cancel
                </Button>
                <Button className="bg-[#1E1E1E] text-white w-full font-normal">
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalConfirm;
