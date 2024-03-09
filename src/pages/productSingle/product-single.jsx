import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducer/product-reducer";

///// Import Data:
import { useGetAllDataId } from "../../search/service/query/useGetAllDataId";

//// Import Component's:
import { RaitingStar } from "../../components/raiting";
import { ImgSkleton } from "../../components/skleton/imgSkleton";
import { PriceSkleton } from "../../components/skleton/price";

///// Import Icon's:
import { HeartIcon } from "../../assets/icons/heart-icon";
import { AccardionTopIcon } from "../../assets/icons/accardion-top-icon";
import { AccardionBottomIcon } from "../../assets/icons/accardion-bottom-icon";

export const ProductSingle = () => {
  const [opneAccardion, setOpenAccardion] = React.useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetAllDataId(id);

  const dispatch = useDispatch(data);

  const addItemFn = () => {
    dispatch(addProduct(data));
  };

  return (
    <div className="container py-8">
      {/* Title */}
      <h1 className=" text-clr333 font-medium tablet:w-[450px] desktop:w-[500px] tablet:text-[18px] desktop:text-[22px]">
        {data?.title.slice(0, 75)} ...
      </h1>

      {/* Raiting and Like */}
      <div className="flex items-center justify-between mt-4 desktop:justify-start desktop:gap-[36px]">
        <span className="flex items-center gap-2">
          <RaitingStar />
          <p className="text-starClr">(0)</p>
        </span>
        <span className="flex items-center gap-2">
          <HeartIcon />
          <p className="text-clr999">В избранное</p>
        </span>
      </div>

      {/* Характеристики and Img For Desktop */}
      <div className="flex items-start gap-[100px] justify-start mt-[30px]">
        {/* Img */}
        {isLoading ? (
          <ImgSkleton />
        ) : (
          <>
            <img
              className="w-[250px] mx-auto desktop:mx-0 desktop:w-[500px] forCatalog:w-[350px]"
              src={data?.img}
              alt="img"
            />
          </>
        )}

        {/* Характеристики */}
        <div className="hidden desktop:inline-block w-[250px]">
          {/* Memory */}
          <div className="desktop:mb-8">
            <p className="text-clr333 mb-4">
              {data?.memory ? "Объем памяти" : ""}
            </p>
            <strong
              className={` border-vermilionCinnabar px-[8px] py-1 ${
                data?.memory ? "border-[1px]" : "border-none"
              }`}
            >
              {data?.memory ? data?.memory : ""}
            </strong>
          </div>

          <div>
            <h1 className="hidden desktop:inline-block text-clr333 text-[18px] font-medium">
              Характеристики :
            </h1>

            <div>
              {/* Color */}
              <div className="mt-3 desktop:flex desktop:items-center desktop:gap-3">
                <p className="text-[14px] text-clr999">
                  {data?.color ? "Цвет :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.color ? data?.color : ""}
                </p>
              </div>

              {/* Brand */}
              <div
                className={`${
                  data?.brand
                    ? "mt-3 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.brand ? "Бранд :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.brand ? data?.brand : ""}
                </p>
              </div>

              {/* Display */}
              <div
                className={`${
                  data?.display
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.display ? "Экран :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.display ? data?.display : ""}
                </p>
              </div>

              {/* GeForce for Notebook */}
              <div
                className={`${
                  data?.geForce
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.geForce ? "Видеокарта :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.geForce ? data?.geForce : ""}
                </p>
              </div>

              {/* Core for Notebook */}
              <div
                className={`${
                  data?.core
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.core ? "Core :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.core ? data?.core : ""}
                </p>
              </div>

              {/* RAM */}
              <div
                className={`${
                  data?.ram
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.ram ? "Оперативная память :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.ram ? data?.ram : ""}
                </p>
              </div>

              {/* Memory */}
              <div
                className={`${
                  data?.memory
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.memory ? "Память :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.memory ? data?.memory : ""}
                </p>
              </div>

              {/* Hz */}
              <div
                className={`${
                  data?.Hz
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.Hz ? "Hz :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.Hz ? data?.Hz : ""}
                </p>
              </div>

              {/* Camera */}
              <div
                className={`${
                  data?.camera
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.camera ? "Камеры :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.camera ? data?.camera : ""}
                </p>
              </div>

              {/* Internet */}
              <div
                className={`${
                  data?.internet
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.internet ? "Интернет :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.internet ? data?.internet : ""}
                </p>
              </div>

              {/* Material */}
              <div
                className={`${
                  data?.material
                    ? "mt-4 desktop:flex desktop:items-center desktop:gap-3"
                    : "hidden"
                }`}
              >
                <p className="text-[14px] text-clr999">
                  {data?.material ? "Материал :" : ""}
                </p>
                <p className="text-[14px] font-medium text-clr333 mt-1">
                  {data?.material ? data?.material : ""}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden bigScreen:inline-block mt-[50px] ml-[50px] py-4 border px-4">
          {/* Price */}
          <div className="mt-6 bigScreen:m-0 bigScreen:pb-3 text-clr333">
            <strong className="text-[18px] text-clr333">
              {data?.price} Сум
            </strong>
          </div>

          {/* button to Bag */}
          <div className="text-center tablet:text-start bigScreen:m-0 mt-5 tablet:mt-6 tablet:mb-[50px]">
            <button
              onClick={addItemFn}
              className="bg-gipermart text-M3LightOnTertiaryContainer py-4 w-[320px]"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>

      {/* Price and Btn Bag  For MOBILE and Tablet */}
      <div className="desktop:mt-[60px] bigScreen:hidden">
        {/* Price */}
        {isLoading ? (
          <PriceSkleton />
        ) : (
          <>
            <div className="mt-6">
              <strong className="text-[18px] text-clr333">
                {data?.price} Сум
              </strong>
            </div>
          </>
        )}

        {/* button to Bag */}
        <div className="text-center tablet:text-start mt-5 tablet:mt-6 tablet:mb-[50px]">
          <button
            onClick={addItemFn}
            className="bg-gipermart text-M3LightOnTertiaryContainer py-4 w-[320px]"
          >
            В корзину
          </button>
        </div>
      </div>

      {/* Характеристики */}
      <div className=" border border-clr333 desktop:hidden py-2 rounded-md max-w-[320px] forCatalog:max-w-[450px] mx-auto mt-6">
        <button
          onClick={() => setOpenAccardion(!opneAccardion)}
          className="flex items-center justify-between px-3 w-full"
        >
          <p className="text-clr333 font-medium">Характеристики</p>
          {opneAccardion ? <AccardionBottomIcon /> : <AccardionTopIcon />}
        </button>
        <div
          className={`px-3 grid overflow-hidden transition-all duration-300 ease-in-out ${
            opneAccardion
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {/* Color */}
            <div className="mt-3">
              <p className="text-[14px] text-clr999">
                {data?.color ? "Цвет :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.color ? data?.color : ""}
              </p>
            </div>

            {/* Brand */}
            <div className="mt-3">
              <p className="text-[14px] text-clr999">
                {data?.brand ? "Бранд :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.brand ? data?.brand : ""}
              </p>
            </div>

            {/* Display */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.display ? "Экран :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.display ? data?.display : ""}
              </p>
            </div>

            {/* GeForce for Notebook */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.geForce ? "Видеокарта :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.geForce ? data?.geForce : ""}
              </p>
            </div>

            {/* Core for Notebook */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.core ? "Core :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.core ? data?.core : ""}
              </p>
            </div>

            {/* RAM */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.ram ? "Оперативная память :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.ram ? data?.ram : ""}
              </p>
            </div>

            {/* Memory */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.memory ? "Память :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.memory ? data?.memory : ""}
              </p>
            </div>

            {/* Hz */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.Hz ? "Hz :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.Hz ? data?.Hz : ""}
              </p>
            </div>

            {/* Camera */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.camera ? "Камеры :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.camera ? data?.camera : ""}
              </p>
            </div>

            {/* Internet */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.internet ? "Интернет :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.internet ? data?.internet : ""}
              </p>
            </div>

            {/* Weight */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.weight ? "Вес :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.weight ? data?.weight : ""}
              </p>
            </div>

            {/* Material */}
            <div className="mt-4">
              <p className="text-[14px] text-clr999">
                {data?.material ? "Материал :" : ""}
              </p>
              <p className="text-[14px] font-medium text-clr333 mt-1">
                {data?.material ? data?.material : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
