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

const TableSummarize = () => {
  const rowsPerPage = 6;
  const [page, setPage] = React.useState(1);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [itemRow, setItemRow] = useState<IRows>();

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
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No users found"}>
        <TableRow key="1">
          <TableCell>
            <h6 className="text-sm font-light text-secondary-foreground">
              230
            </h6>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              13,807.92 USDC
            </h5>
            <h5 className="text-sm font-light text-secondary-foreground mt-1">
              = ~$13,80792
            </h5>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              2,958.92 USDC
            </h5>
            <h5 className="text-sm font-light text-secondary-foreground mt-1">
              = ~$2,958.92
            </h5>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              1,972.56 USDC
            </h5>
            <h5 className="text-sm font-light text-secondary-foreground mt-1">
              = ~$1,972.56
            </h5>
          </TableCell>
          <TableCell>
            <h5 className="text-base font-medium text-secondary-foreground">
              968.28 USDC
            </h5>
            <h5 className="text-sm font-light text-secondary-foreground mt-1">
              = ~$968.28
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
            <h6 className="text-sm font-light text-secondary-foreground">
              0 Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-secondary-foreground">
              0 Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-secondary-foreground">
              0 Winning
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-secondary-foreground">
              3 Winning
            </h6>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>
            <h6 className="text-sm font-semibold text-secondary-foreground">
              Prize <span className="font-light">( each )</span>
            </h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-primary">0 USDC</h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-primary">0 USDC</h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-primary">657.52 USDC</h6>
          </TableCell>
          <TableCell>
            <h6 className="text-sm font-light text-primary">0 USDC</h6>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableSummarize;
