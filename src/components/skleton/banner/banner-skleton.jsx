import React from "react";

export const BannerSkleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton rounded-none h-[100px] desktop:h-[500px] tablet:h-[300px]  w-full"></div>
    </div>
  );
};
