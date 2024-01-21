import { GhostieAbi } from "@/constants/abi/GhostieAbi";
import { address } from "@/constants/address/contractAddress";
import { useMemo } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
export interface IHistory {
  round: bigint;
  drawDate: bigint;
  endDate: bigint;
  match3d: Array<string>;
  match4d: Array<string>;
  match5d: Array<string>;
  matchAll: Array<string>;
  prizePot: bigint;
  startDate: bigint;
  totalYourTicket: bigint;
  totalBalance: bigint;
  totalPlayer: bigint;
  winningNumber: string;
  ticketAmount: bigint;
}
export const useHistory = () => {
  const { data, isLoading } = useContractRead({
    address: address.coreContractAddress as `0x${string}`,
    abi: GhostieAbi,
    functionName: "history",
    watch: true,
  }) as { data: IHistory[]; isLoading: boolean };

  const history = useMemo(() => {
    if (isLoading || !data) {
      return [];
    }
    return data;
  }, [data, isLoading]);
  return { history };
};

export const useTicketAll = (round: number) => {
  const { data, isLoading } = useContractRead({
    address: address.coreContractAddress as `0x${string}`,
    abi: GhostieAbi,
    functionName: "getAllTicketsPerRound",
    args: [1],
  });

  const ticketAll = useMemo(() => {
    if (isLoading || !data) {
      return [];
    }
    return data;
  }, [data, isLoading]);
  return { ticketAll };
};

export const useWithdraw = (ticketId: number, round: number) => {
  const { config } = usePrepareContractWrite({
    address: address.coreContractAddress as `0x${string}`,
    abi: GhostieAbi,
    functionName: "addProjectMember",
    args: [round, ticketId],
  });
  const { data: dataWithdraw, writeAsync: withdrawAsync } =
    useContractWrite(config);
  const { data: dataWithdrawSuccess } = useWaitForTransaction({
    hash: dataWithdraw?.hash,
  });

  return { dataWithdrawSuccess, withdrawAsync };
};
