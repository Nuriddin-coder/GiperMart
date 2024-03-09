import React from "react";

export const BrandsCard = ({ img }) => {
  return (
    <div className="w-[110px] rounded-md h-[50px] flex items-center justify-center px-4 bg-[#E1E1E1]">
      <img className="h-[25px]" src={img} alt="brands" />
    </div>
  );
};
