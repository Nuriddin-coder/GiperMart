import React from "react";
import { useSelector } from "react-redux";

//// Import Components:
import { BasketCard } from "../../components/basketCard";
import { ProductsSlider } from "../../components/slider/products/products-slider";
import { useNavigate } from "react-router-dom";

//// import Img's:
import NoData from "../../assets/imgs/no-data.jpg";

export const Basket = () => {
  const { products, totalPrice, count } = useSelector((state) => state.product);

  const navigate = useNavigate();

  const ofarmet = () => {
    if (products.length) {
      navigate("/order");
    }
  };

  return (
    <>
      {products.length ? (
        <div>
          <h1 className="text-clr333 container mt-[20px] font-medium text-[20px]">
            Корзина :
          </h1>
          <div className="flex gap-5 container">
            <div className="container mt-[30px]">
              {products?.map((item) => (
                <BasketCard key={item.id} {...item} />
              ))}
            </div>

            {/* Checkout and Calculate  for Desktop */}
            <div className="tablet:container hidden desktop:inline-block pt-5">
              {/* Calculate and TotalPrice */}
              <div className="py-[30px] bg-footerBgClr tablet:w-[250px] ml-0 container mt-[30px]">
                <h1 className="text-clr333 font-medium text-[18px]">
                  В корзине :
                </h1>
                <p>Товаров: {count}</p>
                <p className="text-[22px] font-medium text-clr333">
                  {totalPrice} Сум
                </p>
              </div>

              {/* Checkout */}
              <div className="text-center tablet:text-start mt-3">
                <button
                  onClick={ofarmet}
                  className={`${
                    products.length
                      ? "py-3 w-[250px] rounded-md bg-gipermart text-clr333 font-medium"
                      : "py-3 w-[250px] rounded-md bg-red-400 text-white font-medium cursor-not-allowed opacity-70"
                  }`}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="desktop:max-w-[900px] mx-auto">
          <img src={NoData} alt="img" />
        </div>
      )}

      {/* Checkout and Calculate  for Mobile and Tablet */}
      <div className="tablet:container desktop:hidden">
        {/* Calculate and TotalPrice */}
        <div className="py-[30px] bg-footerBgClr tablet:w-[250px] ml-0 container mt-[30px]">
          <h1 className="text-clr333 font-medium text-[18px]">В корзине :</h1>
          <p>Товаров: {count}</p>
          <p className="text-[22px] font-medium text-clr333">
            {totalPrice} Сум
          </p>
        </div>

        {/* Checkout */}
        <div className="text-center tablet:text-start mt-3">
          <button
            onClick={ofarmet}
            className={`${
              products.length
                ? "py-3 w-[250px] rounded-md bg-gipermart text-clr333 font-medium"
                : "bg-red-400 text-white py-3 w-[250px] disabled rounded-md opacity-70 cursor-not-allowed"
            }`}
          >
            Оформить заказ
          </button>
        </div>
      </div>

      {/* Recomend Products */}
      <div className="container mt-[120px] bigScreen:mt-[80px]">
        <h1 className="text-clr333 mb-6 font-medium tablet:text-[18px] desktop:text-[20px]">
          Смартфоны :
        </h1>
        <ProductsSlider />
      </div>
    </>
  );
};
