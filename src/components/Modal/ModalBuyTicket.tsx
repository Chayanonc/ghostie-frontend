import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import NumberListInput from "../Header/NumberListInput";
import { ConnectKitButton } from "connectkit";

const ModalBuyTicket = ({}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("sm");
  const [confirm, setConfirm] = React.useState(false);

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  const confirmTickets = () => {
    setConfirm(!confirm);
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
        {confirm ? (
          <>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    <p className="text-xl">Confirm Ticket</p>
                  </ModalHeader>
                  <ModalBody></ModalBody>
                  <ModalFooter>
                    <Button
                      className="w-full border-[#1E1E1E] border-1 bg-white "
                      onPress={confirmTickets}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="w-full bg-[#1E1E1E] text-white"
                      onPress={onClose}
                    >
                      Confirm
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </>
        ) : (
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
                  <NumberListInput />
                  <Button
                    className="w-full bg-[#1E1E1E] text-white mb-6"
                    onPress={confirmTickets}
                  >
                    Buy
                  </Button>
                </ModalBody>
              </>
            )}
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default ModalBuyTicket;
