import React from "react";

export const CatalogSingleSkleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="skeleton rounded-[5px] h-[100px] w-[150px] tablet:w-[200px] tablet:h-[150px]"></div>
      <div className="skeleton rounded-[5px] h-4 w-full"></div>
      <div className="flex items-center justify-between">
        <div className="skeleton rounded-[5px] h-4 w-[110px]"></div>
        <div className="skeleton rounded-[5px] h-[30px] w-[30px]"></div>
      </div>
    </div>
  );
};
