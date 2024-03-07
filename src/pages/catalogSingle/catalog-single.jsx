import React from "react";
import { useParams } from "react-router-dom";
import { useGetCatalogSingle } from "../../pages/catalogSingle/query/useGetCatalogSingle";
import { CatalogSingleSkleton } from "../../components/skleton/catalogSingle";
import { MainItemCard } from "../../components/mainItemCard";

export const CatalogSingle = () => {
  const [page, setPage] = React.useState(1);
  const { slug } = useParams();
  const { data, isLoading } = useGetCatalogSingle(slug, page);
  console.log(data);

  const buttons = Array(data?.pageSize).fill(null);

  const {} = useGetCatalogSingle();
  return (
    <>
      <div className="container grid desktop:grid-cols-gridColDesktop desktop:gap-y-[40px] tablet:gap-y-[30px] grid-cols-gridColMain tablet:grid-cols-gridColTablet justify-items-center gap-9 mt-[50px]">
        {isLoading ? (
          <div className="grid grid-cols-2 gap-5 tablet:grid-cols-3 tablet:gap-11 forSkleton:grid-cols-4 forSkleton:gap-x-[120px]">
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
            <CatalogSingleSkleton />
          </div>
        ) : (
          <>
            {data?.data?.map((item) => (
              <MainItemCard key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
      <div className="container flex items-center gap-3 justify-center mt-[50px]">
        {buttons?.map((_, i) => {
          let num = i + 1;
          return (
            <button
              onClick={() => setPage(i + 1)}
              className={`px-4 ${
                num === page ? "bg-clr333 text-white" : "border border-black"
              } py-2  rounded-md`}
              key={i}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};
