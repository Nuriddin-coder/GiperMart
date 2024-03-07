import React from "react";
import { Link } from "react-router-dom";

export const SearchCard = ({ img, title, id }) => {
  return (
    <Link
      to={`/product-single/${id}`}
      className="flex w-full items-center gap-8 py-1 px-5 hover:bg-slate-300 duration-200 cursor-pointer"
    >
      <img className="w-[50px] h-auto" src={img} alt="img" />
      <h1>{title.slice(0, 30)}...</h1>
    </Link>
  );
};
