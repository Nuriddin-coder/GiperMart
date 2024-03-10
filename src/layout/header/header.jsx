import React from "react";
import { Link } from "react-router-dom";

///// Import Hook's:
import useDebaunce from "../../hook/useDebaunce";
import { useGetAllData } from "../../search/service/query/useGetAllData";
import { useSelector } from "react-redux";
import { useEffect } from "react";

//// import Component's:
import { CatalogModal } from "../../components/catalogModal";
import { SearchCard } from "../../search/search-card";

///// import Img's;
import LogoImgDesktop from "../../assets/imgs/logo-img.png";

///// import Icon's:
import { MbProfileIcon } from "../../assets/icons/mobile-profile-icon";
import { ProfileIcon } from "../../assets/icons/profile-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { BagIcon } from "../../assets/icons/bag-icon";
import { LogoIcon } from "../../assets/icons/logo-icon";
import { PhoneIcon } from "../../assets/icons/phone-icon";
import { MenuIcon } from "../../assets/icons/menu-icon";
import { SearchIcon } from "../../assets/icons/search-icon";
import { useLocation } from "react-router-dom";
import { HeartRedIcon } from "../../assets/icons/heart-red-icon";

export const Header = () => {
  const [value, setValue] = React.useState("");
  const search = useDebaunce(value);
  const { data } = useGetAllData(search);
  const location = useLocation();
  useEffect(() => {
    setValue("");
  }, [location]);

  const { count } = useSelector((state) => state.product);
  const { favorites } = useSelector((state) => state.favoritesPr);
  return (
    <div className="container pt-4">
      {/* Mobile Header */}
      <div className="flex tablet:hidden items-center justify-between">
        <Link>
          <MbProfileIcon />
        </Link>
        <Link to="/">
          <LogoIcon />
        </Link>
        <div className="flex items-center gap-4">
          {favorites.length ? (
            <Link to="/favorites">
              <HeartRedIcon />
            </Link>
          ) : (
            <Link to="/favorites">
              <HeartIcon />
            </Link>
          )}
          <Link className="relative" to="/basket">
            <BagIcon />
            <span className="bg-red-500 text-white w-[17px] h-[17px] pl-[5px] absolute top-[-6px] right-[-3px] rounded-full text-[12px]">
              {count}
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden tablet:flex justify-end gap-6">
        <button className="text-M3LightOnBackground">Доставка и оплата</button>
        <button className="text-M3LightOnBackground">Пункты выдачи</button>
        <button className="text-M3LightOnBackground">Поддержка</button>
        <span className="flex gap-2">
          <PhoneIcon />
          <a
            className="text-M3LightOnBackground text-[14px]"
            href="tel:+998902537753"
          >
            +998 90 253 77 53
          </a>
        </span>
      </div>

      {/* Mobile Header 2 */}
      <div className="flex tablet:hidden items-center gap-2 justify-between mt-2">
        <button className="p-[9px] bg-gipermart">
          <MenuIcon />
        </button>
        <div className=" bg-chefsHat w-full flex items-center justify-between">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Поиск"
            className="py-[9px] pl-4 pr-[60px] outline-none bg-transparent bg-slate-400 text-gray3"
            type="text"
          />

          <span className="pr-3">
            <SearchIcon />
          </span>

          {/* Search products */}
          <div className="max-h-[200px] max-w-[320px] overflow-y-auto absolute bg-white right-0 forCatalog:max-w-[500px] left-[0px] mx-auto top-[115px] z-20">
            {value.length > 0
              ? data?.map((item) => <SearchCard key={item.id} {...item} />)
              : ""}
          </div>
        </div>
      </div>

      {/* Desktop Header 2 */}
      <div className="tablet:flex gap-6 relative justify-between hidden mt-[20px]">
        <Link to="/">
          <img
            className="max-w-[88px] h-[50px]"
            src={LogoImgDesktop}
            alt="img"
          />
        </Link>

        <div className="bg-gipermart rounded-md">
          <CatalogModal />
          {/* <span>
            <MenuIcon />
          </span>
          <p className="text-[20px] text-M3LightOnTertiaryContainer">Каталог</p> */}
        </div>

        <div className=" bg-chefsHat tablet:bg-white tablet:border-[1px] tablet:border-M3LightOutline w-[650px] flex items-center justify-between">
          <form>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Поиск"
              className="py-[9px] pl-4 pr-[130px] outline-none bg-transparent text-gray3"
              type="text"
            />
          </form>
          <span className="pr-3">
            <SearchIcon />
          </span>
        </div>

        {/* Search products */}
        <div className="max-h-[400px] w-[650px] absolute overflow-y-auto bg-white right-0 left-5 mx-auto top-[50px] z-20">
          {value.length > 0
            ? data?.map((item) => <SearchCard key={item.id} {...item} />)
            : ""}
        </div>

        <div className="flex items-center gap-[32px]">
          <Link className="flex flex-col items-center">
            <ProfileIcon />
            <p className="text-M3LightOnBackground">Войти</p>
          </Link>

          {favorites.length ? (
            <Link
              to="/favorites"
              className="desktop:flex hidden flex-col items-center"
            >
              <HeartRedIcon />
              <p className="text-M3LightOnBackground">Избранное</p>
            </Link>
          ) : (
            <Link
              to="/favorites"
              className="desktop:flex hidden flex-col items-center"
            >
              <HeartIcon />
              <p className="text-M3LightOnBackground">Избранное</p>
            </Link>
          )}
          <Link to="/basket" className="flex flex-col items-center relative">
            <BagIcon />
            <p className="text-M3LightOnBackground">Корзина</p>
            <span className="pl-[6px] text-[14px] text-white bg-M3RefPrimary50 rounded-full w-[20px] absolute left-[30px] top-[-8px] h-[20px]">
              {count}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
