import React from "react";

///// Import Component's:
import { Catalog } from "../../components/catalog";
import { Banner } from "../../components/banner";
import { ProductsSlider } from "../../components/slider/products";
import { ComputerSlider } from "../../components/slider/computers/computers-slider";
import { MixProductCard } from "../../components/mixProductCard";
import { BrandsCard } from "../../components/brandsCards";

//// Import Data's:
import { useGetPhone } from "../../components/slider/products/service/query/useGetPhone";
import { useGetNotebook } from "../../service/query/useGetNotebook";
import { useGetComputer } from "../../service/query/useGetComputer";
import { useGetBrands } from "../../service/query/useGetBrands";

///// Import Img's:
import SaleImg1 from "../../assets/imgs/sale-img1.png";
import SaleImg2 from "../../assets/imgs/sale-img2.png";
import SaleImg3 from "../../assets/imgs/sale-img3.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data: PhoneData } = useGetPhone();
  const { data: NotebookData } = useGetNotebook();
  const { data: ComputerData } = useGetComputer();
  const { data: BrandsData } = useGetBrands();

  return (
    <div>
      {/* Hero */}
      <section>
        <div className="mt-4">
          <Banner />
        </div>
      </section>

      {/* Catalog */}
      <section>
        <div className="mt-10">
          <Catalog />
        </div>
      </section>

      {/* Phones */}
      <section>
        <div className="container mt-[100px]">
          <h1 className="text-clr333 mb-6 font-medium tablet:text-[18px] desktop:text-[20px]">
            Смартфоны и планшеты :
          </h1>
          <ProductsSlider />
        </div>
      </section>

      {/* Sale Product */}
      <section className="bg-gipermart py-5 mt-8">
        <div className="container">
          <h1 className="text-M3LightOnTertiaryContainer forCatalog:text-[24px] text-[20px] font-medium mb-4">
            Акции
          </h1>
          <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-3 items-center gap-y-4">
            <Link className="border-2 border-clr333 rounded-md tablet:border-none ">
              <img
                className="w-[250px] forCatalog:w-[300px] p-1 rounded-md tablet:w-[350px] tablet:h-auto"
                src={SaleImg1}
                alt="product"
              />
            </Link>
            <Link className="border-2 border-clr333 rounded-md tablet:border-none">
              <img
                className="w-[250px] forCatalog:w-[300px] p-1 rounded-md tablet:w-[350px] tablet:h-auto"
                src={SaleImg2}
                alt="product"
              />
            </Link>
            <Link className="border-2 border-clr333 rounded-md tablet:border-none">
              <img
                className="w-[250px] forCatalog:w-[300px] p-1 rounded-md tablet:w-[350px] tablet:h-auto"
                src={SaleImg3}
                alt="product"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Mix Product */}
      <section className="py-[40px]">
        <div className="container">
          <div className="hidden desktop:flex justify-around border-b-2 border-clr999 pb-5">
            <p className="text-clr333 text-[18px] font-semibold">
              Смартфоны и планшеты
            </p>
            <p className="text-clr333 text-[18px] font-semibold">Ноутбуки</p>
            <p className="text-clr333 text-[18px] font-semibold">Компьютеры</p>
          </div>

          {/* text for mobile and Tablet */}
          <h1 className="text-M3LightOnTertiaryContainer desktop:hidden font-medium text-[20px] mb-4">
            Купить сейчас :
          </h1>

          <div className="desktop:flex items-center justify-between">
            {/* Phone Data */}
            <div className="flex flex-col gap-y-[25px]">
              {PhoneData?.map((item) => (
                <MixProductCard key={item.id} {...item} />
              )).slice(0, 3)}
            </div>

            {/* Notebook Data */}
            <div className="flex flex-col gap-y-[25px] my-8">
              {NotebookData?.map((item) => (
                <MixProductCard key={item.id} {...item} />
              )).slice(0, 3)}
            </div>

            {/* Computer Data */}
            <div className="flex flex-col gap-y-[25px] my-8">
              {ComputerData?.map((item) => (
                <MixProductCard key={item.id} {...item} />
              )).slice(4, 7)}
            </div>
          </div>

          <div></div>
        </div>
      </section>

      {/* Phones */}
      <section>
        <div className="container mt-[50px]">
          <h1 className="text-clr333 mb-6 font-medium tablet:text-[18px] desktop:text-[20px]">
            Смартфоны и планшеты :
          </h1>
          <ProductsSlider />
        </div>
      </section>

      {/* Computer */}
      <section>
        <div className="container mt-[50px]">
          <h1 className="text-clr333 mb-6 font-medium tablet:text-[18px] desktop:text-[20px]">
            Ноутбуки и компьютеры :
          </h1>
          <ComputerSlider />
        </div>
      </section>

      {/* Brands */}
      <section>
        <div className="container pt-[80px]">
          <h1 className="text-clr333 mb-6 font-medium tablet:text-[18px] desktop:text-[20px]">
            Популярные бренды :
          </h1>
          <div className="flex gap-8 flex-wrap justify-center max-w-[1000px] mx-auto">
            {BrandsData?.map((item) => (
              <BrandsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
