import React from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/reducer/product-reducer";
import { deleteFavorite } from "../../redux/reducer/favorite-reducer";

//// Import Icon:
import { BagIcon } from "../../assets/icons/bag-icon";
import { DeleteWhiteIcon } from "../../assets/icons/delete-white-icon";

export const FavoriteCard = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const addBagFavoriteItem = () => {
    dispatch(addProduct(props));
  };

  const deleteFavoriteItem = () => {
    dispatch(deleteFavorite({ id }));
  };

  return (
    <div className="flex gap-4 border-b-2 border-ededClr desktop:w-[600px] py-4">
      <img
        className="w-[100px] h-[100px] desktop:w-[200px] desktop:h-[200px]"
        src={props.img}
        alt="img"
      />
      <div>
        <h1 className="text-clr333 font-medium desktop:text-[22px] desktop:font-medium">
          {props.title.slice(0, 20)} ...
        </h1>
        <p className="text-clr333 font-bold mb-2 text-[17px] desktop:text-[20px] desktop:my-3">
          {props.price} Сум
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={addBagFavoriteItem}
            className="flex items-center bg-gipermart px-3 py-1.5 rounded-md gap-2 text-clr333 font-medium"
          >
            Add <BagIcon />
          </button>
          <button
            onClick={deleteFavoriteItem}
            className="flex items-center bg-M3RefPrimary50 px-1.5 py-1.5 rounded-md gap-2 text-white font-medium"
          >
            <DeleteWhiteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
