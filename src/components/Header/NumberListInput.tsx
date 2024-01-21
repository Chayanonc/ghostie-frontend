import React, { useState } from "react";
import { OTPInput } from "./OTPInput";
import DeleteIcon from "../Icon/DeleteIcon";
import { Button, Input, Image, useDisclosure } from "@nextui-org/react";
import AddIcon from "../Icon/AddIcon";
import { generateRandomSixDigitNumber } from "@/utils/randomNumber";

type Props = {
  onArrayChange: any;
};

const NumberListInput = ({ onArrayChange }: Props) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [otp, setOtp] = useState("");
  const [enteredNumbers, setEnteredNumbers] = useState<Array<string>>([]);

  const clearOtp = () => {
    setOtp("");
    setEnteredNumbers([]);
    onArrayChange([]);
  };

  const clearNumber = (index: number) => {
    const updatedNumber = [...enteredNumbers, otp];
    updatedNumber.splice(index);
    setEnteredNumbers(updatedNumber);
    onArrayChange(updatedNumber);
    setOtp("");
  };

  const handleAddNumber = () => {
    if (otp.length === 6) {
      setEnteredNumbers([...enteredNumbers, otp]);
      onArrayChange([...enteredNumbers, otp]);
      setOtp("");
    }
  };

  const generateRandom = () => {
    const update = `${generateRandomSixDigitNumber()}`;
    return update;
  };

  const splitDigits = (number: string) => {
    const splited = number.toString().split("").map(Number);
    return splited;
  };

  const handleRadom = () => {
    const gen = generateRandom();
    if (enteredNumbers.length == 0) {
      setEnteredNumbers([generateRandom()]);
      onArrayChange([generateRandom()]);
    } else {
      const newRandomNumbers: Array<string> = enteredNumbers.map(() => {
        return generateRandom();
      });
      setEnteredNumbers(newRandomNumbers);
      onArrayChange(newRandomNumbers);
    }
  };

  return (
    <div>
      <p
        className="text-right underline text-sm text-black font-light mb-3"
        onClick={clearOtp}
      >
        clear
      </p>
      <ul>
        {enteredNumbers.map((number: any, index: number) => (
          <li key={index}>
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-2">
                {splitDigits(number).map((value: any, index: number) => (
                  <Input
                    key={index}
                    value={value}
                    className="w-[55px] border-[#A15E92] border-1 rounded-xl"
                  >
                    {value}
                  </Input>
                ))}
              </div>
              <div onClick={() => clearNumber(index)}>
                <DeleteIcon />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex">
        <OTPInput
          value={otp}
          numInputs={6}
          onChange={setOtp}
          separator={<span style={{ width: "8px" }}></span>}
          inputStyle={{
            border: "1px solid #A15E92",
            borderRadius: "12px",
            width: "55px",
            height: "55px",
            fontSize: "12px",
            fontWeight: "400",
            caretColor: "blue",
          }}
        />
        <div
          className="flex justify-center items-center ml-2 "
          onClick={handleAddNumber}
        >
          <AddIcon />
        </div>
      </div>

      <div
        onClick={handleAddNumber}
        className="flex item-center text-sm py-4 text-[#3A3848] mb-12"
      >
        <div>
          <AddIcon />
        </div>
        <div>Add Number</div>
      </div>

      <Button
        onClick={handleRadom}
        className="w-full border-[#1E1E1E] border-1 bg-white"
      >
        <Image
          alt="Icon Number"
          className=" w-full h-full object-cover"
          src="/Svg/Random.svg"
          width={49}
          height="100%"
        />
        Random All
      </Button>
    </div>
  );
};

export default NumberListInput;
