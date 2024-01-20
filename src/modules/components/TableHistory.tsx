import PaginationCustom from "@/components/Pagination/PaginationCustom";
import { IRows, columns, rows } from "@/constants/mockup/table";
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
import ModalTicket3 from "./view/ModalTicket3";

const TableHistory = () => {
  const rowsPerPage = 6;
  const [page, setPage] = React.useState(1);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [itemRow, setItemRow] = useState<IRows>();

  const renderCell = React.useCallback((item: IRows, columnKey: string) => {
    switch (columnKey) {
      case "round":
        return <h6 className="text-sm font-normal">{item.round}</h6>;
      case "Time_end":
        return <h6 className="text-sm font-normal">{item.Time_end}</h6>;
      case "Ticket_Amount":
        return <h6 className="text-sm font-normal">{item.Ticket_Amount}</h6>;
      case "Prize_pot":
        return <h6 className="text-sm font-normal">{item.Prize_pot}</h6>;
      case "Your_Tickets":
        return <h6 className="text-sm font-normal">{item.Your_Tickets}</h6>;
      case "Winning_Number":
        return (
          <div className="flex gap-3 text-center">
            {Array.from(item.Winning_Number).map(
              (value: any, index: number) => (
                <h6
                  key={index}
                  className="text-sm font-semibold border-2 w-6 h-6 border-primary border-opacity-50 rounded-full"
                >
                  {value}
                </h6>
              )
            )}
          </div>
        );
      default:
        break;
    }
  }, []);
  const pages = Math.ceil(rows.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
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
          items={items}
          className="h-[1000px]"
        >
          {(item) => (
            <TableRow
              key={item.round}
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
      {/* <ModalHistory
        round={itemRow?.round || ""}
        time={itemRow?.Time_end || ""}
        winNumber={itemRow?.Winning_Number || ""}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      /> */}
      <ModalTicket3
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};

export default TableHistory;
