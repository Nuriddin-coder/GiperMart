import React from "react";
import { MenuIcon } from "../../assets/icons/menu-icon";
import { useGetCatalog } from "../catalog/query/useGetCatalog";
import { CatalogModalCard } from "./catalogMoadalCard";

export const CatalogModal = () => {
  const { data } = useGetCatalog();
  return (
    <div>
      <button
        className="flex items-center mt-3 w-full outline-none gap-4 px-4 bg-transparent hover:bg-transparent border-none"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <MenuIcon />
        Каталог
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-[1100px] grid grid-rows-2 grid-cols-3 justify-items-center items-center h-[600px]">
          {data?.map((item) => (
            <CatalogModalCard key={item.id} {...item} />
          ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
