import React from "react";
import { useNavigate } from "react-router-dom";

export const CatalogCard = (props) => {
  const navigate = useNavigate();

  const navigateSingle = () => {
    navigate(`/catalog-single/${props.categoryKey}`);
  };

  return (
    <div
      onClick={navigateSingle}
      className=" bg-clrF6F6F6 inline-block cursor-pointer  py-6 forCatalog:py-9 pl-[5px] tablet:pl-[25px] tablet:w-[280px]"
    >
      <div className="flex items-center gap-4 ">
        <img
          className="w-[56px] h-[56px] tablet:w-[96px] tablet:h-[96px]"
          src={props.img}
          alt="img"
        />
        <p className="w-[99px] text-[12px] text-clr333">{props.text}</p>
      </div>
    </div>
  );
};
