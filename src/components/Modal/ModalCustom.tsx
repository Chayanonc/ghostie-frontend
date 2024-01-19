import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import ButtonCustom from "../Button/ButtonCustom";
type ModalCustomTypes = {
  title: string;
  description: string;
  children: React.ReactNode;
  textButton?: string;
  handleClick?: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
  size?: string | any;
};

const ModalCustom = ({
  title,
  description,
  children,
  textButton,
  handleClick,
  isOpen,
  onOpenChange,
  size = "md",
}: ModalCustomTypes) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={size}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="py-6">
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className=" text-primary-foreground text-sm font-normal py-2">
                  {description}
                </p>
              </div>
            </ModalHeader>
            <ModalBody className="py-0">{children}</ModalBody>
            {textButton && handleClick ? (
              <ModalFooter className="py-6">
                <ButtonCustom
                  handleClick={handleClick}
                  title={textButton}
                  className="w-full"
                />
              </ModalFooter>
            ) : null}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCustom;
