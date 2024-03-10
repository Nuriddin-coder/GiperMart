import React from "react";
import { useSelector } from "react-redux";

//// Import Component's"
import { OrderCard } from "../../components/orderCard";
import { CheckboxCustom } from "../../components/checkboxCustom";

///// Import Icon's:
import { ClickIcon } from "../../assets/icons/click-icon";
import { PaymeIcon } from "../../assets/icons/payme-icon";

export const Order = () => {
  const { products, totalPrice } = useSelector((state) => state.product);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container desktop:flex desktop:flex-row-reverse items-start justify-between">
      {/* Order Products and Prices */}
      <div>
        <h1 className="text-clr333 desktop:hidden pt-5 font-semibold text-[22px]">
          Оформление заказа
        </h1>

        {/* Ordered Products */}
        <div className="border-b-2 border-ededClr pb-8 pt-4 bigScreen:mt-[50px]">
          <h2 className="text-clr333 bigScreen:font-bold bigScreen:text-[22px] tablet:bg-white  font-medium text-[18px] bg-ededClr rounded-borderForOrder pl-3 py-2">
            Ваш заказ :
          </h2>
          {products?.map((item) => (
            <OrderCard key={item.id} {...item} />
          ))}
        </div>

        {/* Product Price and Promo Price */}
        <div className="py-4 desktop:py-8 border-b-2 border-ededClr">
          {/* Product Price */}
          <span className="flex items-center bigScreen:justify-between tablet:justify-start tablet:gap-4 justify-between pb-3 bigScreen:pb-6">
            <p className="text-clr333 tablet:text-[18px] tablet:font-medium">
              Сумма по товарам :
            </p>
            <p className="text-clr333 tablet:text-[18px] tablet:font-medium">
              {totalPrice} Сум
            </p>
          </span>

          {/* Promo Price */}
          <span className="flex items-center bigScreen:justify-between tablet:justify-start tablet:gap-4 justify-between">
            <p className="text-clr333 tablet:text-[18px] tablet:font-medium">
              Стоимость доставки :
            </p>
            <p className="text-clr333 tablet:text-[18px] tablet:font-medium">
              0
            </p>
          </span>
        </div>

        {/* Total Price */}
        <div className="flex items-center justify-between tablet:justify-start bigScreen:justify-between tablet:gap-4 py-4">
          <p className="text-clr333 tablet:text-[18px] tablet:font-medium">
            Итого:
          </p>
          <p className="text-clr333 tablet:text-[18px] tablet:font-medium">
            {totalPrice} Сум
          </p>
        </div>
      </div>

      <form onSubmit={submit}>
        {/* Contact details */}
        <div className="w-full">
          <h1 className="text-clr333 pt-5 font-semibold text-[22px]">
            Оформление заказа
          </h1>

          <h2 className="text-clr333 pt-5 font-semibold text-[22px]">
            Контактные данные
          </h2>

          {/* Input for Name */}
          <div className="mt-2 bigScreen:mt-4">
            <p className="text-clr333 pb-[2px] bigScreen:text-[18px] bigScreen:font-medium">
              Контактное лицо (ФИО)
            </p>
            <input
              className="border-2 bigScreen:w-[520px] bigScreen:py-2 desktop:w-[450px] border-clr8080 py-1 outline-none pl-2 w-full forCatalog:w-[350px]"
              type="text"
            />
          </div>

          {/* Input for Tel Number */}
          <div className="mt-6">
            <p className="text-clr333 pb-[2px] bigScreen:text-[18px] bigScreen:font-medium">
              Контактный телефон
            </p>
            <input
              className="border-2 bigScreen:w-[520px] bigScreen:py-2 desktop:w-[450px] border-clr8080 py-1 outline-none pl-2 w-full forCatalog:w-[350px]"
              type="number"
            />
          </div>

          <h2 className="text-clr333 pt-5 font-semibold text-[22px]">
            Доставка
          </h2>

          {/* Delivery Input */}
          <div className="mt-6">
            <p className="text-clr333 pb-[2px] bigScreen:text-[18px] bigScreen:font-medium">
              Населенный пункт
            </p>
            <input
              className="border-2 bigScreen:w-[520px] bigScreen:py-2 desktop:w-[450px] border-clr8080 py-1 outline-none pl-2 w-full forCatalog:w-[350px]"
              type="text"
            />
          </div>

          {/* Input Cooment Order */}
          <div className="mt-6">
            <p className="text-clr333 pb-[2px] bigScreen:text-[18px] bigScreen:font-medium">
              Комментарии к заказу
            </p>
            <input
              className="border-2 bigScreen:w-[520px] bigScreen:py-2 desktop:w-[450px] border-clr8080 py-1 outline-none pl-2 h-[120px] w-full forCatalog:w-[350px]"
              type="text"
            />
          </div>

          {/* Client Email */}
          <h2 className="text-clr333 pt-5 font-semibold text-[22px]">
            Покупатель
          </h2>

          {/* Delivery Input */}
          <div className="mt-6">
            <p className="text-clr333 pb-[2px] bigScreen:text-[18px] bigScreen:font-medium">
              Email
            </p>
            <input
              className="border-2 bigScreen:w-[520px] bigScreen:py-2 desktop:w-[450px] border-clr8080 py-1 outline-none pl-2 w-full forCatalog:w-[350px]"
              type="email"
            />
          </div>

          {/* Check always buy */}
          <div className="flex gap-3 mt-4 cursor-pointer">
            <CheckboxCustom />
            <label className="cursor-pointer" htmlFor="check">
              <p className="text-clr333 text-[18px]">
                Стать постоянным покупателем
              </p>
              <p className="text-[14px] text-clr7474 max-w-[300px]">
                Вы сможете видеть историю заказов, проще делать новые и получать
                скидки
              </p>
            </label>
          </div>

          {/* Pay */}
          <h2 className="text-clr333 pt-5 font-semibold text-[22px]">
            Способ оплаты
          </h2>

          <div className="flex cursor-pointer gap-6 mt-4 items-center bg-footerBgClr w-[240px] pl-3 py-1 rounded-md">
            <input
              type="radio"
              name="radio-7"
              className="radio radio-accent"
              id="check2"
            />
            <label className="cursor-pointer" htmlFor="check2">
              <p className="text-clr333 text-[18px]">Наличными курьеру</p>
              <p className="text-[14px] text-clr7474 max-w-[300px]">
                Наличными курьеру
              </p>
            </label>
          </div>

          <div className="flex cursor-pointer items-center gap-6 bg-footerBgClr rounded-md py-3 w-[130px] pl-3 mt-3">
            <input
              id="check1"
              type="radio"
              name="radio-7"
              className="radio radio-accent"
            />
            <label className="cursor-pointer" htmlFor="check1">
              <PaymeIcon />
            </label>
          </div>

          {/* Confirm order */}
          <div className="py-[32px]">
            <button className="text-clr333 rounded-md forCatalog:w-[300px] py-3 bg-gipermart w-full font-medium">
              Подтвердить заказ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
