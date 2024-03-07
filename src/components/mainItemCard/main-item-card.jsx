import React from "react";

////// import Icon's:
import { MbBagIcon } from "../../assets/icons/mb-bag-icon";
import { BagIcon } from "../../assets/icons/bag-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";

export const MainItemCard = ({ img, title, price }) => {
  return (
    <div className="flex flex-col justify-between relative">
      <div>
        <div className="text-center pb-3">
          <img
            className="w-[100px] tablet:w-[150px] h-auto"
            src={img}
            alt="img"
          />
        </div>
        <h1 className="w-[100px] tablet:w-[190px] tablet:text-[18px] text-[14px] text-clr333 pb-1">
          {title.slice(0, 18)} ...
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <p className="tablet:text-[18px] text-[12px] font-semibold text-clr333">
          {price} Сум
        </p>
        <button className="bg-gipermart px-1 py-1 rounded-md tablet:hidden">
          <MbBagIcon />
        </button>
        <button className="bg-gipermart hidden tablet:inline-block px-1 py-1 rounded-md">
          <BagIcon />
        </button>
      </div>
      <button className="absolute right-0 top-2">
        <HeartIcon />
      </button>
    </div>
  );
};
