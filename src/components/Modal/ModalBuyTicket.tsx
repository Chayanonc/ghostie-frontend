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
      <Button
        key={size}
        onPress={() => handleOpen(size)}
        className="bg-black text-white w-[199px] h-[56px] shadow"
        size="lg"
      >
        Borrow now !
      </Button>
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
                  {/* <AddNumberList /> */}
                  <NumberListInput />
                </ModalBody>
                <ModalFooter>
                  <div className="flex-row w-full">
                    <Button className="w-full border-[#1E1E1E] border-1 bg-white">
                      <Image
                        alt="Icon Number"
                        className=" w-full h-full object-cover"
                        src="/Svg/Random.svg"
                        width={49}
                        height="100%"
                      />
                      Random All
                    </Button>
                    <Button
                      className="w-full bg-[#1E1E1E] text-white mt-2"
                      onPress={confirmTickets}
                    >
                      Buy
                    </Button>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default ModalBuyTicket;
