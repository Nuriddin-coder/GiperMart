import React from "react";

///// Import Redux reducers:
import { addProduct } from "../../redux/reducer/product-reducer";
import { useDispatch } from "react-redux";

////// import Icon's:
import { MbBagIcon } from "../../assets/icons/mb-bag-icon";
import { BagIcon } from "../../assets/icons/bag-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { Link } from "react-router-dom";

export const MainItemCard = (props) => {
  const dispatch = useDispatch();

  const addItemFn = () => {
    dispatch(addProduct(props));
  };

  return (
    <div className="flex flex-col justify-between gap-y-3 tablet:w-[200px]  relative">
      <div>
        <div className="text-center pb-3">
          <img
            className="w-[100px] tablet:w-[150px] h-auto"
            src={props.img}
            alt="img"
          />
        </div>
        <h1 className="w-[100px] tablet:w-[190px] tablet:text-[18px] text-[14px] text-clr333 pb-1">
          {props.title.slice(0, 15)} ...
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <p className="tablet:text-[18px] text-[12px] font-semibold text-clr333">
          {props.price} Сум
        </p>

        {/* Mobile Bag Icon */}
        <button
          onClick={addItemFn}
          className="bg-gipermart px-1 py-1 rounded-md tablet:hidden"
        >
          <MbBagIcon />
        </button>

        {/* main Bag Icon */}
        <button
          onClick={addItemFn}
          className="bg-gipermart hidden tablet:inline-block px-1 py-1 rounded-md"
        >
          <BagIcon />
        </button>
      </div>
      <Link
        to={`/product-single/${props.id}`}
        className="tablet:text-center hover:scale-110 duration-200"
      >
        <button className="tablet:py-2 bg-gipermart py-1 w-[100px] tablet:w-full rounded-md text-[14px] tablet:font-medium">
          View Details
        </button>
      </Link>
      <button className="absolute right-0 top-2">
        <HeartIcon />
      </button>
    </div>
  );
};
