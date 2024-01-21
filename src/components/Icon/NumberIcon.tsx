import React from "react";
import { Image} from "@nextui-org/react";

type NumberIconTypes = {
  number: string;
};

const NumberIcon = ({ number }: NumberIconTypes) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Image
        alt="Icon Number"
        className=" w-full h-full object-cover"
        src="/Images/ball.png"
        width={49}
        height="100%"
      />
      <div
         style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            color: 'white',
            fontWeight: 'bold',
            zIndex: 50, //  // Ensure the number is in front of the image
          }}
      >
        {number}
      </div>
    </div>
  );
};

export default NumberIcon;
