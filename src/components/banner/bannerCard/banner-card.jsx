import React from "react";

export const BannerCard = (props) => {
  return (
    <div>
      <img className="h-auto w-full" src={props.img} alt="img" />
    </div>
  );
};
