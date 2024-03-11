import React from "react";
import { Link } from "react-router-dom";

export const BrandsCard = ({ img, brand }) => {
  return (
    <Link
      to={`/brand-single/${brand}`}
      className="w-[110px] hover:scale-110 duration-300 rounded-md h-[50px] flex items-center justify-center px-4 bg-[#E1E1E1]"
    >
      <img className="h-[25px]" src={img} alt="brands" />
    </Link>
  );
};
