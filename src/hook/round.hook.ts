import { ERC20Abi } from "@/constants/abi/ERC20Abi";
import { GhostieAbi } from "@/constants/abi/GhostieAbi";
import { useMemo } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

export const getRounds = (round: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useContractRead({
    address: "0xd124147d7bb3107ed3cbec40d8b7c421053be357",
    abi: GhostieAbi,
    functionName: "rounds",
    args: [round],
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = useMemo(() => {
    if (isLoading || !data) {
      return [];
    }
  }, [data, isLoading]);

  console.log(response);

  return { response };
};

export const approveContract = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { config } = usePrepareContractWrite({
    address: "0x0032a18a1da62f6930ef21c1c348a23db32c2161",
    abi: ERC20Abi,
    functionName: "approve",
    args: ["0xd124147d7bb3107ed3cbec40d8b7c421053be357", 100000000000000000000],
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: approve, writeAsync: writeApprove } = useContractWrite(config);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: dataApproveSuccess } = useWaitForTransaction({
    hash: approve?.hash,
  });

  return { dataApproveSuccess, writeApprove };
};

export const buyTicketContract = (numbers: string[]) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { config: buyTicketConfig } = usePrepareContractWrite({
    address: "0xd124147d7bb3107ed3cbec40d8b7c421053be357",
    abi: GhostieAbi,
    functionName: "buyTicket",
    args: [numbers],
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: buyTicket, writeAsync: writeABuyTicket } = useContractWrite(buyTicketConfig);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: dataBuySuccess } = useWaitForTransaction({
    hash: buyTicket?.hash,
  });

  return { dataBuySuccess, writeABuyTicket };
};
