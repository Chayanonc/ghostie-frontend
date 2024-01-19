import { Button } from "@nextui-org/react";
import React from "react";
type ButtonCustomTypes = {
  id?: string;
  title: string;
  handleClick?: () => void;
  className?: string;
  type?: string | any;
};

const ButtonCustom = ({
  id,
  title,
  handleClick,
  className,
  type,
}: ButtonCustomTypes) => {
  return (
    <Button
      id={id}
      onClick={handleClick}
      variant="solid"
      color="secondary"
      radius="md"
      className={className}
      type={type ? type : undefined}
    >
      {title}
    </Button>
  );
};

export default ButtonCustom;
