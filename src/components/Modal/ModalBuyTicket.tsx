import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
import NumberListInput from "../Header/NumberListInput";
import { ConnectKitButton } from "connectkit";
import ModalConfirm from "@/modules/components/ModalConfirm";

type ModalByTicketTypes = {
  isOpen: boolean;
  onOpenChange: () => void;
  onCloseAddNumber: () => void;
  onOpen: () => void;
};

const ModalBuyTicket = ({
  isOpen,
  onOpenChange,
  onCloseAddNumber,
  onOpen,
}: ModalByTicketTypes) => {
  const [size, setSize] = React.useState("sm");
  const [enteredNumbers, setEnteredNumbers] = useState<Array<string>>([]);
  const [confirm, setConfirm] = React.useState(false);

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  const confirmTickets = () => {
    setConfirm(!confirm);
  };
  const handleInputChange = (newArray: []) => {
    setEnteredNumbers(newArray);
  };

  return (
    <>
      <ConnectKitButton.Custom>
        {({ isConnected, show }) => {
          return (
            <div>
              {isConnected ? (
                <>
                  {" "}
                  <Button
                    key={size}
                    onPress={() => handleOpen(size)}
                    className="bg-[#FFC64F] text-black font-semibold w-[199px] h-[56px] shadow-sm"
                    size="lg"
                  >
                    Buy Ticket Now!!
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button
                    onClick={show}
                    className="bg-black text-white w-[199px] h-[56px] shadow"
                    size="lg"
                  >
                    Connect Wallet
                  </Button>
                </>
              )}
            </div>
          );
        }}
      </ConnectKitButton.Custom>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-xl">Buy Ticket</p>
                <p className="text-sm text-[#98989D] font-light">
                  #1144 | End: Feb 15, 2024, 7:00 PM
                </p>
              </ModalHeader>
              <ModalBody>
                <NumberListInput onArrayChange={handleInputChange} />
                <ModalConfirm
                  Numbers={enteredNumbers}
                  onCloseAddNumber={onCloseAddNumber}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBuyTicket;
