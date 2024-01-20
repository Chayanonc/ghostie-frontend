import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Quicksand } from "next/font/google";
import React from "react";
type ModalTicket1Types = {
  round: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });
const ModalTicket1 = ({
  round,
  isOpen,
  onOpenChange,
  onClose,
}: ModalTicket1Types) => {
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
              <div className="w-full">
                <h2 className="text-xl font-semibold">
                  Round <span className="ml-3 text-gradient">#{round}</span>
                </h2>
              </div>
            </ModalHeader>
            <ModalBody>x</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalTicket1;
