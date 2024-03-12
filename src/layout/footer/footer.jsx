import React from "react";
import { FooterLogo } from "../../assets/icons/footer-logo";
import { Facebook } from "../../assets/icons/facebook";
import { Ok } from "../../assets/icons/ok";
import { Wk } from "../../assets/icons/wk";
import { Instagram } from "../../assets/icons/instagram";
import { YouTube } from "../../assets/icons/you-tube";

///// Import Icon's:
import { AccardionBottomIcon } from "../../assets/icons/accardion-bottom-icon";
import { AccardionTopIcon } from "../../assets/icons/accardion-top-icon";

//// Import Img's:
import LogoFooter from "../../assets/imgs/logo-img.png";

export const Footer = () => {
  const [footerAccardion, setFooterAccardion] = React.useState(false);
  const [clientAccardion, setClientAccardion] = React.useState(false);
  const [infoAccardion, setInfoAccardion] = React.useState(false);

  return (
    <div className="bg-footerBgClr py-5 mt-8">
      <div className="container desktop:flex desktop:justify-between desktop:py-10">
        <div>
          <img className="w-[110px] h-[60px]" src={LogoFooter} alt="logo" />
          <div className="my-3">
            <a className="text-clr333 font-medium" href="tel:+99893374-66-44">
              +99 893 374-66-44
            </a>
            <p className="text-clr333">справочная служба</p>
          </div>
          <div>
            <a className="text-clr333 font-medium" href="tel:+99893374-66-44">
              +99 890 253-77-53
            </a>
            <p className="text-clr333">интернет-магазин</p>
          </div>
          <div>
            <p className="text-clr333 font-medium text-[18px] my-2">
              Оставайтесь на связи :
            </p>
            <div className="flex items-center gap-3">
              <Facebook />
              <Ok />
              <Wk />
              <Instagram />
              <YouTube />
            </div>
          </div>
        </div>

        {/* Условия обмена и возврата */}
        <div className="desktop:flex hidden flex-col gap-y-2">
          <h2 className="font-medium desktop:font-bold">
            Условия обмена и возврата
          </h2>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Каталог
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            О компании
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Контакты
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Доставка
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Оплата
          </a>
        </div>

        {/* Client */}
        <div className="desktop:flex hidden flex-col gap-y-2">
          <h2 className="font-medium desktop:font-bold">Клиентам</h2>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Личный кабинет
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Блог
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Обратная связь
          </a>
        </div>

        {/* Info */}
        <div className="desktop:flex hidden flex-col gap-y-2">
          <h2 className="font-medium desktop:font-bold">Информация</h2>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Пользовательское соглашение
          </a>
          <a className="text-clr333 bigScreen:text-[18px]" href="#">
            Политика конфиденциальности и оферта
          </a>
        </div>

        {/* Accardions */}
        <div className="desktop:hidden max-w-[350px]">
          {/* Accardion 1 */}
          <div className="mt-4 border-[1px] border-clr999 rounded-md max-w-[350px]">
            <button
              onClick={() => setFooterAccardion(!footerAccardion)}
              className="flex w-full py-1.5 px-4 items-center justify-between"
            >
              <p className="text-clr333 font-medium">О магазине</p>
              <span className="bg-white rounded-full px-[2px] py-[2px]">
                {footerAccardion ? (
                  <AccardionBottomIcon />
                ) : (
                  <AccardionTopIcon />
                )}
              </span>
            </button>

            <div
              className={`px-3 grid overflow-hidden transition-all duration-300 ease-in-out ${
                footerAccardion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-y-4">
                <a className="text-clr333 " href="#">
                  Каталог
                </a>
                <a className="text-clr333 " href="#">
                  О компании
                </a>
                <a className="text-clr333 " href="#">
                  Контакты
                </a>
                <a className="text-clr333 " href="#">
                  Доставка
                </a>
                <a className="text-clr333 mb-1" href="#">
                  Оплата
                </a>
              </div>
            </div>
          </div>

          {/* Accardion 2 */}
          <div className="mt-4 border-[1px] border-clr999 rounded-md max-w-[350px]">
            <button
              onClick={() => setClientAccardion(!clientAccardion)}
              className="flex w-full py-1.5 px-4 items-center justify-between"
            >
              <p className="text-clr333 font-medium">Клиентам</p>
              <span className="bg-white rounded-full px-[2px] py-[2px]">
                {clientAccardion ? (
                  <AccardionBottomIcon />
                ) : (
                  <AccardionTopIcon />
                )}
              </span>
            </button>

            <div
              className={`px-3 grid overflow-hidden transition-all duration-300 ease-in-out ${
                clientAccardion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-y-4">
                <a className="text-clr333 " href="#">
                  Личный кабинет
                </a>
                <a className="text-clr333 " href="#">
                  Блог
                </a>
                <a className="text-clr333 mb-1" href="#">
                  Обратная связь
                </a>
              </div>
            </div>
          </div>

          {/* Accardion 3 */}
          <div className="mt-4 border-[1px] border-clr999 rounded-md max-w-[350px]">
            <button
              onClick={() => setInfoAccardion(!infoAccardion)}
              className="flex w-full py-1.5 px-4 items-center justify-between"
            >
              <p className="text-clr333 font-medium">Информация</p>
              <span className="bg-white rounded-full px-[2px] py-[2px]">
                {infoAccardion ? <AccardionBottomIcon /> : <AccardionTopIcon />}
              </span>
            </button>

            <div
              className={`px-3 grid overflow-hidden transition-all duration-300 ease-in-out ${
                infoAccardion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-y-4">
                <a className="text-clr333 " href="#">
                  Пользовательское соглашение
                </a>
                <a className="text-clr333 mb-1" href="#">
                  Политика конфиденциальности и оферта
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
