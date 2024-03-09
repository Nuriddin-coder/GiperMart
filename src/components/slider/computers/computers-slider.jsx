import React from "react";
import Slider from "react-slick";
import { MainItemCard } from "../../mainItemCard";
import { useGetComputer } from "../../../service/query/useGetComputer";

//// Import Component's:
import { CatalogSingleSkleton } from "../../skleton/catalogSingle";

//// Import Icon:
import { SwiperArrowRight } from "../../../assets/icons/swiper-arrow-right";
import { SwiperArrowLeft } from "../../../assets/icons/swiper-arrow-left";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 top-[-50px] right-0 cursor-pointer"
      onClick={onClick}
    >
      <SwiperArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer absolute top-[-50px] right-[50px] z-20"
      onClick={onClick}
    >
      <SwiperArrowRight />
    </div>
  );
}

export const ComputerSlider = () => {
  const { data, isLoading } = useGetComputer();

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {isLoading ? (
        <div className="flex items-center justify-between">
          <CatalogSingleSkleton />
          <CatalogSingleSkleton />
          <CatalogSingleSkleton />
          <CatalogSingleSkleton />
          <CatalogSingleSkleton />
        </div>
      ) : (
        <>
          <Slider {...settings}>
            {data?.map((item) => (
              <MainItemCard key={item.id} {...item} />
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};
