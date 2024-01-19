import React from "react";
import TableHistory from "./components/TableHistory";

const TableContent = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl py-3">History round</h2>
      <TableHistory />
    </div>
  );
};

export default TableContent;
