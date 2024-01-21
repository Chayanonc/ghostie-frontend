import { useWithdraw } from "@/hook/history.hook";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Quicksand } from "next/font/google";
import React from "react";
type ModalTicket3Types = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });
const ModalTicket3 = ({ isOpen, onOpenChange, onClose }: ModalTicket3Types) => {
  return (
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
              <h5 className="text-secondary-foreground text-xl font-medium">
                The amount can be withdrawn
              </h5>
            </ModalHeader>

            <ModalBody>
              <div className="flex justify-between">
                <h6 className="text-sm">Your ticket price</h6>
                <h6 className="text-sm">20.0 USDC</h6>
              </div>
              <div className="flex justify-between">
                <h6 className="text-sm">Total earn</h6>
                <h6 className="text-sm">0.049 USDC</h6>
              </div>
              <div className="flex justify-between">
                <h6 className="text-sm">Total prize</h6>
                <h6 className="text-sm">328.76 USDC</h6>
              </div>
              <div className="flex justify-between">
                <h6 className="text-sm">Fee</h6>
                <h6 className="text-sm">0.00 USDC</h6>
              </div>
              <div className="w-full border-b border-dashed" />
              <div className="flex justify-between">
                <h6 className="text-sm font-semibold my-auto">Total Amount</h6>
                <div className=" text-end">
                  <h6 className="text-sm text-primary font-semibold">
                    348.809 USDC
                  </h6>
                  <h6 className="text-xs">~ $348.809</h6>
                </div>
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
                Withdraw
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalTicket3;
