import React from "react";
import { toggleAmount } from "../../redux/reducer/product-reducer";
import { removeProduct } from "../../redux/reducer/product-reducer";

///// Import Hook's:
import { useDispatch } from "react-redux";

import {
  saveProduct,
  deleteFavorite,
} from "../../redux/reducer/favorite-reducer";

////// import Icon's:
import { PlusIcon } from "../../assets/icons/plus-icon";
import { MinusIcon } from "../../assets/icons/minus-icon";
import { BasketHeartIcon } from "../../assets/icons/basket-heart-icon";
import { DeleteIcon } from "../../assets/icons/delete-icon";
import { HeartRedIcon } from "../../assets/icons/heart-red-icon";

export const BasketCard = (props) => {
  const id = props.id;
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = React.useState(false);
  const [show, setShow] = React.useState(true);

  const plusFn = () => {
    if (props.userCount < props.count) {
      dispatch(toggleAmount({ type: "plus", id: props.id }));
    } else {
      setShowBtn(true);
    }
  };

  const minusFn = () => {
    if (props.userCount > 1) {
      dispatch(toggleAmount({ type: "minus", id: props.id }));
    }
  };

  const addFavoride = () => {
    dispatch(saveProduct(props));
    setShow(!show);
  };

  const deleteFavoride = () => {
    dispatch(deleteFavorite({ id }));
    setShow(!show);
  };

  return (
    <div>
      {/* Tamplate Basket Page for Mobile And Tablet */}
      <div className="border-b-2 border-ededClr pb-5 pt-3 bigScreen:hidden">
        <div className="flex gap-x-[25px]">
          <div>
            <img
              className="w-[90px] h-[90px] tablet:w-[200px] desktop:w-[300px] tablet:h-auto"
              src={props.img}
              alt="img"
            />
          </div>
          <div className="border-b-2 pb-[15px] border-ededClr desktop:border-none ">
            <h1 className="pb-[5px] font-medium desktop:pb-[15px] desktop:text-[20px] desktop:font-semibold text-clr333">
              {props.title.slice(0, 15)}...
            </h1>
            <p className="text-clr333 desktop:text-[20px] font-medium">
              Количество П :{" "}
              <span className="text-clr333 font-bold">{props.count}</span>
            </p>
            <p className="py-[7px] text-clr333 font-semibold desktop:text-[20px] desktop:mb-2">
              {props.price} Сум
            </p>

            {/* Calculating Btns */}
            <div className="flex gap-3 justify-center w-[110px] items-center rounded-md bg-ededClr py-1.5">
              <button
                disabled={showBtn || props.userCount === props.count}
                onClick={plusFn}
                className="bg-white pl-[3px] w-[30px] rounded-md disabled:opacity-65"
              >
                <PlusIcon />
              </button>
              <strong className="text-clr333">{props.userCount}</strong>
              <button
                disabled={props.userCount < 2}
                onClick={minusFn}
                className="bg-white pl-[4px] w-[30px] rounded-md disabled:opacity-55"
              >
                <MinusIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Delete and Heart Btn's */}
        <div className="flex icons justify-end pt-[20px] gap-4">
          {/* Heart Btn */}
          {show ? (
            <button
              onClick={addFavoride}
              className="flex gap-1 items-center border-[2px] border-clr999 px-1 py-1 rounded-lg"
            >
              <BasketHeartIcon />
              <p className="text-clr999">В избранное</p>
            </button>
          ) : (
            <button
              onClick={deleteFavoride}
              className="flex gap-1 items-center border-[2px] border-clrff0 px-1 py-1 rounded-lg"
            >
              <HeartRedIcon />
              <p className="text-clrff0">В избранное</p>
            </button>
          )}

          {/* Delete Btn */}
          <button
            onClick={() => dispatch(removeProduct({ id }))}
            className="flex gap-1 items-center border-[1px] border-clr999 px-1 py-1 rounded-lg"
          >
            <DeleteIcon />
            <p className="text-clr999">Удалить</p>
          </button>
        </div>
      </div>

      {/* Tamplate Basket Page for Desktop */}
      <div className="hidden bigScreen:inline-block pt-5">
        <div className="flex gap-6 w-[850px] border-b-2 border-ededClr pb-6">
          <img className="w-[170px] h-auto" src={props.img} alt="img" />

          <div className="w-full">
            {/* Title and Price for Desktop */}
            <div className="flex items-center justify-between">
              <h1 className="text-clr333 font-bold text-[26px]">
                {props.title.slice(0, 25)} ...
              </h1>
              <p className="text-clr333 font-bold text-[22px]">
                {props.price} Сум
              </p>
            </div>

            {/* Delete and Calculate Btn's  for Desktop */}
            <div className="flex justify-between items-end">
              {/* Delete and Heart Btn's for Desktop */}
              <div className="flex justify-start pt-[20px] gap-4">
                {/* Heart Btn */}
                {show ? (
                  <button
                    onClick={addFavoride}
                    className="flex gap-1 items-center border-[2px] border-clr999 px-1 py-1 rounded-lg"
                  >
                    <BasketHeartIcon />
                    <p className="text-clr999">В избранное</p>
                  </button>
                ) : (
                  <button
                    onClick={deleteFavoride}
                    className="flex gap-1 items-center border-[2px] border-clrff0 px-1 py-1 rounded-lg"
                  >
                    <HeartRedIcon />
                    <p className="text-clrff0">В избранное</p>
                  </button>
                )}

                {/* Delete Btn */}
                <button
                  onClick={() => dispatch(removeProduct({ id }))}
                  className="flex gap-1 items-center border-[1px] border-clr999 px-1 py-1 rounded-lg"
                >
                  <DeleteIcon />
                  <p className="text-clr999">Удалить</p>
                </button>
              </div>

              {/* Plus and Minus Btn's for Desktop */}
              <div className="flex gap-3 justify-center w-[110px] items-center rounded-md bg-ededClr py-1.5">
                <button
                  disabled={showBtn || props.userCount === props.count}
                  onClick={plusFn}
                  className="bg-white pl-[3px] w-[30px] rounded-md disabled:opacity-65"
                >
                  <PlusIcon />
                </button>
                <strong className="text-clr333">{props.userCount}</strong>
                <button
                  disabled={props.userCount < 2}
                  onClick={minusFn}
                  className="bg-white pl-[4px] w-[30px] rounded-md disabled:opacity-55"
                >
                  <MinusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
