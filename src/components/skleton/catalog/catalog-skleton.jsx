import React from "react";

export const CatalogSkleton = () => {
  return (
    <div className="h-[100px] w-[500px]">
      <div className="skeleton tablet:h-32 h-22 w-full"></div>
      <div className="skeleton tablet:hidden h-20 w-28"></div>
    </div>
  );
};
