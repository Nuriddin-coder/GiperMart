import React from "react";
import { Link } from "react-router-dom";

export const MixProductCard = ({ img, id, title, price }) => {
  return (
    <div className="flex items-center gap-x-4">
      <img className="w-[120px] tablet:w-[200px] desktop:w-[110px] bigScreen:w-[150px]" src={img} alt="img" />
      <div>
        <h1 className="pb-[10px] tablet:text-[22px] tablet:font-medium desktop:text-[16px]">{title.slice(0,25)}</h1>
        <strong>{price} Сум</strong>
        <div className="pt-[10px] tablet:pt-5">
          <Link
            to={`/product-single/${id}`}
            className="px-2 bg-gipermart rounded-md py-1 tablet:px-5 tablet:py-2"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
