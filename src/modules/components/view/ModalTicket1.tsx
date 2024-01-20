import React from "react";
type ModalTicket1Types = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};

const ModalTicket1 = ({ isOpen, onOpenChange, onClose }: ModalTicket1Types) => {
  return <div>ModalTicket1</div>;
};

export default ModalTicket1;
