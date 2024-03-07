import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "./query/useGetQuery";

///// Import Icon's:
import { BannerRightArrowIcon } from "../../assets/icons/banner-right-arrow-icon";
import { BannerLeftArrowIcon } from "../../assets/icons/banner-left-arrow-icon";

///// Import Component's:
import { BannerCard } from "./bannerCard";
import { BannerSkleton } from "../skleton/banner/banner-skleton";

//// React Slick CSS:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-white cursor-pointer absolute tablet:top-[150px] desktop:top-[240px] z-10 forCatalog:top-[90px] desktop:right-[95px] top-[50px] right-[25px] rounded-full desktop:pl-[10px] desktop:pt-[11px] pl-[2px] pt-[2px] shadow-shadowArrow desktop:w-[45px] desktop:h-[45px] w-[28px] h-[28px]"
      onClick={onClick}
    >
      <BannerRightArrowIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-white cursor-pointer absolute tablet:top-[150px] desktop:top-[240px] forCatalog:top-[90px] top-[50px] desktop:left-[95px] left-[25px] z-10 rounded-full desktop:pl-[9px] desktop:pt-[10px] pl-[2px] pt-[3px] shadow-shadowArrow desktop:w-[45px] desktop:h-[45px] w-[28px] h-[28px]"
      onClick={onClick}
    >
      <BannerLeftArrowIcon />
    </div>
  );
}

export const Banner = () => {
  const { data, isLoading } = useGetBanner();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container">
      {isLoading ? (
        <BannerSkleton />
      ) : (
        <Slider {...settings}>
          {data?.map((item) => (
            <BannerCard key={item.id} {...item} />
          ))}
        </Slider>
      )}
    </div>
  );
};
