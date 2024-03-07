import React from "react";
import { useGetPhone } from "./service/query/useGetPhone";
import { MainItemCard } from "../../mainItemCard";
import Slider from "react-slick";

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

export const ProductsSlider = () => {
  const { data } = useGetPhone();
  console.log(data);

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
      <Slider {...settings}>
        {data?.map((item) => (
          <MainItemCard key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};
