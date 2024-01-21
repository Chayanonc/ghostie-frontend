import { approveContract, buyTicketContract } from "@/hook/round.hook";
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
import React from "react";
type ModalConfirmTypes = {
  Numbers: string[];
  onCloseAddNumber: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });

const ModalConfirm = ({ Numbers, onCloseAddNumber }: ModalConfirmTypes) => {
  const { isOpen: isOpenView, onOpen, onClose, onOpenChange } = useDisclosure();

  const { dataApproveSuccess, writeApprove } = approveContract();
  const { dataBuySuccess, writeABuyTicket } = buyTicketContract(Numbers);

  const handleApprove = async () => {
    const transaction = await writeApprove?.();
    console.log(transaction, "transaction");
    if (transaction) {
      console.log(transaction, "transaction in if");
      const transactionBuy = await writeABuyTicket?.();
      console.log(transactionBuy, dataBuySuccess, "transactionBuy===");
      return transactionBuy;
    }
  };

  const renderTicket = Numbers.map((item: string, index: number) => (
    <div key={index}>
      <div className="flex justify-between">
        <div className="my-auto">
          <h6 className="text-xs font-semibold text-primary">
            #{Number(index) > 9 ? index : `0${index + 1}`}
          </h6>
        </div>
        <div className="flex gap-2">
          {Array.from(item).map((value, index: number) => (
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
      <Button
        className="w-full bg-[#1E1E1E] text-white mb-6"
        onClick={() => {
          onOpen();
        }}
      >
        Buy
      </Button>
      <Modal
        isOpen={isOpenView}
        onOpenChange={onOpenChange}
        size="md"
        hideCloseButton
        className={`${quicksand.className}`}
      >
        <ModalContent>
          {() => (
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
                      {Numbers.length} Ticket
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
                    {(Numbers.length * 10).toFixed(2)} USDC
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
                <Button
                  className="bg-[#1E1E1E] text-white w-full font-normal"
                  onClick={() => {
                    handleApprove();
                    onClose();
                    onCloseAddNumber();
                  }}
                >
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
