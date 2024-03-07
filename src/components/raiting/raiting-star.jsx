import React from "react";

export const RaitingStar = () => {
  return (
    <div className="rating gap-1 rating-sm">
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-starClr"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-starClr"
        checked
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-starClr"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-starClr"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-starClr"
      />
    </div>
  );
};
