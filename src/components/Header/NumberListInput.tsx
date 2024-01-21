import React, { useState } from "react";
import { OtpInput } from "./OTPInput";
import DeleteIcon from "../Icon/DeleteIcon";
import { Input } from "@nextui-org/react";
import AddIcon from "../Icon/AddIcon";

type Props = {};

const NumberListInput = ({}: Props) => {
  const [otp, setOtp] = useState("");
  const clearOtp = () => {
    setOtp("");
    setEnteredNumbers([]);
  };
  const [enteredNumbers, setEnteredNumbers] = useState<any>([]);

  const clearNumber = (index: number) => {
    const updatedNumber = [...enteredNumbers, otp];
    updatedNumber.splice(index);
    setEnteredNumbers(updatedNumber);
    setOtp("");
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      setEnteredNumbers([...enteredNumbers, otp]);
      setOtp("");
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
                {Array.from(number).map((value: any, index: number) => (
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

      <OtpInput
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
        onClick={handleVerify}
        className="flex item-center text-sm py-4 text-[#3A3848]"
      >
        <div>
          <AddIcon />
        </div>
        <div>Add Number</div>
      </div>
    </div>
  );
};

export default NumberListInput;
