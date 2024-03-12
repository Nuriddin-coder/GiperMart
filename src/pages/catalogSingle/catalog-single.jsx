import React from "react";
import { useParams } from "react-router-dom";
import { useGetCatalogSingle } from "../../pages/catalogSingle/query/useGetCatalogSingle";
import { CatalogSingleSkleton } from "../../components/skleton/catalogSingle";
import { MainItemCard } from "../../components/mainItemCard";
import { useGetSort } from "../../service/query/useGetSort";
import { useDispatch, useSelector } from "react-redux";
import { createSort, clearSort } from "../../redux/reducer/sort-reducer";

const CatalogSingle = () => {
  const { value } = useSelector((state) => state.sort);

  const [page, setPage] = React.useState(1);
  const { slug } = useParams();
  const { data, isLoading } = useGetCatalogSingle(slug, page, value);
  const { data: getCategory } = useGetSort();

  const dispatch = useDispatch();

  const att = getCategory?.map((item) => item.attribute).flat();
  const buttons = Array(data?.pageSize).fill(null);

  const changeParams = (value, keyName) => {
    dispatch(createSort({ value, keyName }));
  };

  const resetSort = () => {
    dispatch(clearSort());
  };

  return (
    <div className="bigScreen:grid bigScreen:grid-cols-gridColCategory bigScreen:container">
      <div>
        {" "}
        <div className="container grid desktop:grid-cols-gridColDesktop desktop:gap-y-[40px] tablet:gap-y-[30px] grid-cols-gridColMain tablet:grid-cols-gridColTablet justify-items-center gap-9 mt-[50px]">
          {isLoading ? (
            <div className="grid grid-cols-2 gap-5 tablet:grid-cols-3 tablet:gap-11 forSkleton:grid-cols-3 forSkleton:gap-x-[120px]">
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
      </div>
      <form className="mt-[50px] hidden bigScreen:inline-block">
        {att?.map((item, i) => (
          <div key={i}>
            <h1 className="text-clr333 font-semibold pb-2 mt-4">
              {item.name} :
            </h1>
            {item?.values?.map((value, i) => (
              <div key={i} className="form-control flex items-start">
                <label className="cursor-pointer label">
                  <input
                    onChange={() => changeParams(value, item.keyName)}
                    value={value}
                    type="checkbox"
                    className="checkbox checkbox-info"
                  />
                  <span className="label-text pl-4">{value}</span>
                </label>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-3">
          <button
            onClick={resetSort}
            className="text-[18px] px-3 py-1 bg-clrff0 text-white rounded-md"
            type="reset"
          >
            Сброс
          </button>
        </div>
      </form>
    </div>
  );
};

export default CatalogSingle;
