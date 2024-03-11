import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllData } from "../../search/service/query/useGetAllData";
import { MainItemCard } from "../../components/mainItemCard";

export const BrandSingle = () => {
  const { key } = useParams();
  console.log(key);
  const { data } = useGetAllData();

  const brandFilter = data.filter((item) => item.brand === key);
  console.log(brandFilter);

  return (
    <div className="container">
      <h1 className="font-medium tablet:text-[26px] text-[20px] tablet:mt-5 text-clr333 mt-3">{key} :</h1>
      <div className=" grid justify-items-center justify-center bigScreen:grid-cols-4 grid-cols-2 gap-y-8 forCatalog:grid-cols-3 mt-4">
        {brandFilter?.map((item) => (
          <MainItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
