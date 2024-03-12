import React from "react";
import { toast } from "react-toastify";
import { loadState } from "../../config/storage";

///// Import Redux reducers:
import { addProduct, removeProduct } from "../../redux/reducer/product-reducer";
import {
  saveProduct,
  deleteFavorite,
} from "../../redux/reducer/favorite-reducer";
import { useDispatch, useSelector } from "react-redux";

////// import Icon's:
import { MbBagIcon } from "../../assets/icons/mb-bag-icon";
import { BagIcon } from "../../assets/icons/bag-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { HeartRedIcon } from "../../assets/icons/heart-red-icon";
import { DeleteWhiteIcon } from "../../assets/icons/delete-white-icon";
import { Link } from "react-router-dom";

export const MainItemCard = (props) => {
  const dispatch = useDispatch();
  const [showLike, setShowLike] = React.useState(false);
  const [addToCard, setAddToCard] = React.useState(false);
  const id = props.id;
  const { products } = useSelector((state) => state.product);
  const { favorites } = useSelector((state) => state.favoritesPr);

  React.useEffect(() => {
    setAddToCard(products.some((item) => item.id === id));
    setShowLike(favorites.some((item) => item.id === id));
  }, [products, id, favorites]);

  /* Save Basket */
  const addCardFn = () => {
    dispatch(addProduct(props));
    toast.success("added Basket!", {
      position: "top-right",
      autoClose: 1000,
      limit: 1,
    });
  };

  {
    /* Save Favorite */
  }
  const saveItemFn = () => {
    dispatch(saveProduct(props));
    toast.success("added Favorites!", {
      position: "top-right",
      autoClose: 500,
      limit: 1,
    });
  };

  {
    /* Delete Favorite */
  }
  const deleteItemFn = () => {
    dispatch(deleteFavorite({ id }));
    setShow(!show);
    toast.info("deleted", {
      position: "top-right",
      autoClose: 500,
      limit: 1,
    });
  };

  {
    /* Delete Basket */
  }
  const deleteItemBasket = () => {
    dispatch(removeProduct({ id }));
    toast.info("deleted", {
      position: "top-right",
      autoClose: 500,
      limit: 1,
    });
  };

  return (
    <div className="flex flex-col justify-between gap-y-3 mr-4 tablet:w-[200px] forCatalog:w-[150px]  relative">
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
        {addToCard ? (
          <button
            onClick={deleteItemBasket}
            className="bg-M3RefPrimary50  tablet:hidden px-1 py-1 rounded-md"
          >
            <DeleteWhiteIcon />
          </button>
        ) : (
          <button
            onClick={addCardFn}
            className="bg-gipermart tablet:hidden px-1 py-1 rounded-md"
          >
            <MbBagIcon />
          </button>
        )}

        {/* main Bag Icon */}
        {addToCard ? (
          <button
            onClick={deleteItemBasket}
            className="bg-M3RefPrimary50 hidden tablet:inline-block px-1 py-1 rounded-md"
          >
            <DeleteWhiteIcon />
          </button>
        ) : (
          <button
            onClick={addCardFn}
            className="bg-gipermart hidden tablet:inline-block px-1 py-1 rounded-md"
          >
            <BagIcon />
          </button>
        )}
      </div>
      <Link
        to={`/product-single/${props.id}`}
        className="tablet:text-center hover:scale-110 duration-200"
      >
        <button className="tablet:py-2 bg-gipermart py-1 w-[100px] tablet:w-full rounded-md text-[14px] tablet:font-medium">
          View Details
        </button>
      </Link>
      {showLike ? (
        <button onClick={deleteItemFn} className="absolute right-0 top-2">
          <HeartRedIcon />
        </button>
      ) : (
        <button onClick={saveItemFn} className="absolute right-0 top-2">
          <HeartIcon />
        </button>
      )}
    </div>
  );
};
