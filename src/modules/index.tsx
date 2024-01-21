import dynamic from "next/dynamic";
import React from "react";
const TableHistory = dynamic(() => import("./components/TableHistory"), {
  ssr: false,
});

const TableContent = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl py-3">History round</h2>
      <TableHistory />
    </div>
  );
};

export default TableContent;
