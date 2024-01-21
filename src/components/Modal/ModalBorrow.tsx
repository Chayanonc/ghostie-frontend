import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalFooter,
  Input,
} from "@nextui-org/react";

interface ModalBorrowProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface Ticket {
  id: number;
  value: number;
}

const ModalBorrow = (modalBorrowProps: ModalBorrowProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [borrowAmount, setBorrowAmount] = useState<number>();
  const [selectedTicket, setSelectedTicket] = useState<Ticket>();

  const mockMyTicketInStakingRound = [
    {
      id: 1,
      value: 20,
    },
    {
      id: 2,
      value: 100,
    },
  ];

  const handleSelected = async (ticket: Ticket) => {
    setSelectedTicket(ticket);
    onOpen();
    modalBorrowProps.onClose();
  };

  return (
    <>
      <Modal
        isOpen={modalBorrowProps.isOpen}
        onOpenChange={modalBorrowProps.onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-xl">Select ticket to stake</p>
                <p className="text-sm text-[#98989D] font-light">
                  Stake your ticket to borrow GHO
                </p>
              </ModalHeader>
              <ModalBody>
                {mockMyTicketInStakingRound.map((item, index) => (
                  <div
                    className="border rounded-md p-4 hover:bg-gradient-to-r from-[#3747A6] to-[#A15E92] hover:text-white cursor-pointer hover:opacity-80"
                    key={index}
                    onClick={() => {
                      handleSelected(item);
                    }}
                  >
                    <p className="font-bold">{`Ticket #${item.id}`}</p>
                    <p className="text-sm font-extralight">{`Value: ${item.value} USDC`}</p>
                    <p className="text-sm font-extralight">{`Available GHO: ${
                      item.value * 0.7
                    } USDC`}</p>
                  </div>
                ))}
                <Button
                  className="w-full bg-[#1E1E1E] text-white mb-6"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-xl">{`Select Ticket #${
                  selectedTicket?.id ?? 0
                }`}</p>
              </ModalHeader>
              <ModalBody>
                <Input
                  onChange={(e) => setBorrowAmount(Number(e.target.value))}
                  label="Enter borrow amount"
                  type="number"
                ></Input>
                <div className="px-2">
                  <div className="flex flex-row w-full justify-between text-sm  font-light">
                    <p>{`You maximum borrow is`}</p>
                    <p>{`${((selectedTicket?.value ?? 0) * 0.7).toFixed(
                      2
                    )} GHO`}</p>
                  </div>
                  <div className="flex flex-row w-full justify-between text-sm  font-light">
                    <p>{`You borrow amout`}</p>
                    <p>{`${(borrowAmount ?? 0).toFixed(2)} GHO`}</p>
                  </div>
                  <div className="flex flex-row w-full justify-between text-sm  font-light">
                    <p>{`You will repay`}</p>
                    <p>{`${(
                      (borrowAmount ?? 0) +
                      (borrowAmount ?? 0) * 0.07
                    ).toFixed(2)} GHO`}</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full bg-[#1E1E1E] text-white"
                  //   onPress={}
                >
                  Approve
                </Button>
                <Button
                  className="w-full bg-[#1E1E1E] text-white"
                  //   onPress={}
                >
                  Borrow
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBorrow;
