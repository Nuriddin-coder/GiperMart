import React from "react";
import Slider from "react-slick";
import { useGetCatalog } from "./query/useGetCatalog";

//// import Component's:
import { CatalogCard } from "./catalogCard";
import { CatalogSkleton } from "../skleton/catalog";

export const Catalog = () => {
  const { data, isLoading } = useGetCatalog();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      {isLoading ? (
        <div className="flex items-center gap-4">
          <CatalogSkleton />
          <CatalogSkleton />
          <CatalogSkleton />
          <CatalogSkleton />
          <CatalogSkleton />
          <CatalogSkleton />
        </div>
      ) : (
        <Slider {...settings}>
          {data?.map((item) => (
            <CatalogCard key={item.id} {...item} />
          ))}
        </Slider>
      )}
    </div>
  );
};
