import { Pagination, PaginationItemType, cn } from "@nextui-org/react";
import React from "react";
type PaginationCustomTypes = {
  page: number;
  totalPage: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationCustom = ({
  page,
  totalPage,
  setValue,
}: PaginationCustomTypes) => {
  const classNames = React.useMemo(
    () => ({
      base: ["shadow-none"],
      wrapper: ["shadow-none", "text-primary-foreground"],
      chevronNext: ["text-primary"],
      cursor: ["text-white", "font-semibold"],
    }),
    []
  );
  return (
    <Pagination
      variant="light"
      showControls
      loop
      isCompact
      radius="sm"
      size="sm"
      total={totalPage}
      page={page}
      className="gap-2 "
      onChange={setValue}
      classNames={classNames}
    />
  );
};

export default PaginationCustom;
