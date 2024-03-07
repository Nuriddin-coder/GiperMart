import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllDataId } from "../../search/service/query/useGetAllDataId";

export const SearchSingle = () => {
  const { id } = useParams();
  const { data } = useGetAllDataId(id);
  console.log(data);

  return (
    <div>
      <img src={data.img} alt="img" />
    </div>
  );
};