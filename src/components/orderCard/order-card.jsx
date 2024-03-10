import React from "react";

export const OrderCard = ({ img, title, userCount, userPrice, price }) => {
  return (
    <div>
      <div className="flex tablet:w-[450px] bigScreen:w-[500px] w-full py-2 shadow-lg gap-x-4 mt-4 border-2 border-gray-400 px-2 rounded-xl">
        <img className="w-[110px] h-[110px] desktop:w-[80px] desktop:h-[80px] tablet:w-[150px] tablet:h-auto" src={img} alt="img" />
        <div className="w-full pr-3">
          <h1 className="text-clr333 font-medium tablet:text-[20px] desktop:text-[18px]">{title.slice(0, 20)}...</h1>
          <h2 className="text-end pt-2 text-clr333 desktop:text-[16px] font-semibold tablet:text-[18px] tablet:pt-4">
            {price} Сум
          </h2>
          <span className="flex justify-end pt-2 tablet:pt-4 items-center gap-2">
            <p className="text-clr333 desktop:text-[16px] font-medium tablet:text-[18px]">{userCount}</p>
            <p>X</p>
            <p className="text-clr333 desktop:text-[16px] font-medium tablet:text-[18px]">{userPrice} Сум</p>
          </span>
        </div>
      </div>
    </div>
  );
};
