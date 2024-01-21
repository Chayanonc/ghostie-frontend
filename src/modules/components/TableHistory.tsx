import PaginationCustom from "@/components/Pagination/PaginationCustom";
import { columns } from "@/constants/mockup/table";
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
import { IHistory, useHistory } from "@/hook/history.hook";
import { formatUnits } from "viem";
import { formatDate } from "@/utils/formateDate";

const TableHistory = () => {
  const rowsPerPage = 6;
  const [page, setPage] = React.useState(1);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [itemRow, setItemRow] = useState<IHistory>();
  const { history } = useHistory();

  const renderCell = React.useCallback((item: IHistory, columnKey: string) => {
    switch (columnKey) {
      case "round":
        return (
          <h6 className="text-sm font-normal">{formatUnits(item.round, 0)}</h6>
        );
      case "drawDate":
        return (
          <h6 className="text-sm font-normal">
            {formatDate(Number(formatUnits(item.drawDate, 0)) * 1000)}
          </h6>
        );
      case "ticketAmount":
        return (
          <h6 className="text-sm font-normal">
            {Number(item.ticketAmount) / 10 ** 18}
          </h6>
        );
      case "prizePot":
        return (
          <h6 className="text-sm font-normal">
            {formatUnits(item.prizePot, 0) !== "0"
              ? formatUnits(item.prizePot, 0)
              : `${1392.56 * Number(item.round)}`}
          </h6>
        );
      case "totalYourTicket":
        return (
          <h6 className="text-sm font-normal">
            {formatUnits(item.totalYourTicket, 0)}
          </h6>
        );
      case "winningNumber":
        return item.winningNumber ? (
          <div className="flex gap-3 text-center">
            {Array.from(item.winningNumber).map((value: any, index: number) => (
              <h6
                key={index}
                className="text-sm font-semibold border-2 w-6 h-6 border-primary border-opacity-50 rounded-full"
              >
                {value}
              </h6>
            ))}
          </div>
        ) : (
          <h6 className="text-sm font-semibold text-primary">
            Waiting for the prize draw...
          </h6>
        );
      default:
        break;
    }
  }, []);
  const pages = Math.ceil(history.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return history.slice(start, end);
  }, [page, rowsPerPage]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex justify-between">
        <div className="flex gap-2 my-auto">
          <h6 className=" text-xs font-normal my-auto pl-8">Current Page</h6>
          <div className="border border-[#A15E92] text-[#A15E92] px-2.5 py-1 rounded-md text-xs">
            {page}
          </div>
        </div>
        <PaginationCustom page={page} totalPage={pages} setValue={setPage} />
      </div>
    );
  }, [items.length, page, pages]);
  const classNames = React.useMemo(
    () => ({
      wrapper: ["w-full", "shadow-none", "px-0", "h-[480px]"],
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
      tr: ["hover:bg-primary", "hover:bg-opacity-10"],
    }),
    []
  );

  return (
    <>
      <Table
        aria-label="Example table with dynamic content"
        classNames={classNames}
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"No users found"}
          items={history.sort((a, b) => Number(b.round) - Number(a.round))}
          className="h-[1000px]"
        >
          {(item) => (
            <TableRow
              key={item?.round}
              onClick={() => {
                if (item) {
                  setItemRow(item);
                }
                onOpen();
              }}
            >
              {(columnKey: any) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalHistory
        round={itemRow?.round ? formatUnits(itemRow?.round, 0) : ""}
        time={
          itemRow?.drawDate
            ? formatDate(Number(formatUnits(itemRow.drawDate, 0)) * 1000)
            : ""
        }
        match3={itemRow?.match3d ? itemRow.match3d.length : 0}
        match4={itemRow?.match4d ? itemRow.match4d.length : 0}
        match5={itemRow?.match5d ? itemRow.match5d.length : 0}
        matchAll={itemRow?.matchAll ? itemRow.matchAll.length : 0}
        ticketAmount={
          itemRow?.ticketAmount ? formatUnits(itemRow.ticketAmount, 0) : "0"
        }
        prizePot={itemRow?.prizePot ? formatUnits(itemRow?.prizePot, 0) : "0"}
        winNumber={itemRow?.winningNumber ? itemRow?.winningNumber : "xxxxxx"}
        totalPlayers={
          itemRow?.totalPlayer ? formatUnits(itemRow?.totalPlayer, 0) : ""
        }
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};

export default TableHistory;
