import React from "react";
import { useSelector } from "react-redux";
import NoData from "../../assets/imgs/no-data.jpg";

import { FavoriteCard } from "../../components/favorideCard";

export const Favorites = () => {
  const { favorites } = useSelector((state) => state.favoritesPr);

  return (
    <div className="container mt-6">
      {favorites.length ? (
        <div>
          {favorites?.map((item) => (
            <FavoriteCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="desktop:max-w-[900px] mx-auto">
          <img src={NoData} alt="img" />
        </div>
      )}
    </div>
  );
};
