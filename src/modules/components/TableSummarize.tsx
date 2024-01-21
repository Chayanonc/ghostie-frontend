import PaginationCustom from "@/components/Pagination/PaginationCustom";
import { IRows, columnsSummarize, rows } from "@/constants/mockup/table";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import ModalHistory from "./ModalHistory";
import { formatDecimal, formatFiatNumber } from "@/utils/formatNumber";
type TableSummarizeType = {
  match3: number;
  match4: number;
  match5: number;
  matchAll: number;
  prizePot: string;
};
const TableSummarize = ({
  match3,
  match4,
  match5,
  matchAll,
  prizePot,
}: TableSummarizeType) => {
  const matchAllM = Number(prizePot) * 0.7;
  const match3M = Number(prizePot) * 0.05;
  const match4M = Number(prizePot) * 0.1;
  const match5M = Number(prizePot) * 0.15;

  const classNames = React.useMemo(
    () => ({
      wrapper: ["w-full", "shadow-none", "px-0", "py-0"],
      th: [
        "bg-primary",
        "bg-opacity-30",
        "text-secondary-foreground",
        "py-3",
        "text-base",
        "font-semibold",
        "px-8",
      ],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
        "border-b",
        "border-divider",
        "py-5",
        "px-8",
      ],
    }),
    []
  );

  return (
    <Table
      aria-label="Example table with dynamic content"
      classNames={classNames}
    >
      <TableHeader columns={columnsSummarize}>
        {(column) => (
          <TableColumn key={column.key}>
            <h6 className="text-base ">{column.label}</h6>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"}>
        <TableRow key="1">
          <TableCell>
            <h6 className="text-sm font-semibold text-secondary-foreground">
              Prize
            </h6>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              {formatDecimal(matchAllM)} USDC
            </h5>
            <h5 className="text-sm  text-secondary-foreground mt-1">
              = ~{formatFiatNumber(matchAllM)}
            </h5>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              {formatDecimal(match5M)} USDC
            </h5>
            <h5 className="text-sm  text-secondary-foreground mt-1">
              = ~{formatFiatNumber(match5M)}
            </h5>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              {formatDecimal(match4M)} USDC
            </h5>
            <h5 className="text-sm  text-secondary-foreground mt-1">
              = ~{formatFiatNumber(match4M)}
            </h5>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              {formatDecimal(match3M)} USDC
            </h5>
            <h5 className="text-sm  text-secondary-foreground mt-1">
              = ~{formatFiatNumber(match3M)}
            </h5>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>
            <h6 className="text-sm font-semibold text-secondary-foreground">
              Total Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-secondary-foreground">
              {matchAll} Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-secondary-foreground">
              {match5} Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-secondary-foreground">
              {match4} Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-secondary-foreground">
              {match3} Winning
            </h6>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>
            <h6 className="text-sm font-semibold text-secondary-foreground">
              Total Prize <span>( each )</span>
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-primary">
              {formatDecimal(Number(matchAllM) / matchAll) === "NaN"
                ? "0"
                : formatDecimal(Number(matchAllM) / matchAll)}{" "}
              USDC
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-primary">
              {formatDecimal(Number(match5M) / match5) === "NaN"
                ? "0"
                : formatDecimal(Number(match5M) / match5)}{" "}
              USDC
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-primary">
              {formatDecimal(Number(match4M) / match4) === "NaN"
                ? "0"
                : formatDecimal(Number(match4M) / match4)}{" "}
              USDC
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm  text-primary">
              {formatDecimal(Number(match3M) / match3) === "NaN"
                ? "0"
                : formatDecimal(Number(match3M) / match3)}
              USDC
            </h6>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableSummarize;
