import React from "react";

//// Component's:
import { Home } from "../pages/home";
import { CatalogSingle } from "../pages/catalogSingle";
import { ProductSingle } from "../pages/productSingle";
import { BrandSingle } from "../pages/brandSingle";
import { Basket } from "../pages/basket";
import { Order } from "../pages/order";
import { Favorites } from "../pages/favorites";

export const pages = [
  {
    id: 1,
    element: <Home />,
  },
  {
    id: 2,
    element: <CatalogSingle />,
    path: "/catalog-single/:slug",
  },
  {
    id: 3,
    element: <ProductSingle />,
    path: "/product-single/:id",
  },
  {
    id: 4,
    element: <BrandSingle />,
    path: "/brand-single/:key",
  },
  {
    id: 4,
    element: <Basket />,
    path: "/basket",
  },
  {
    id: 5,
    element: <Order />,
    path: "/order",
  },
  {
    id: 6,
    element: <Favorites />,
    path: "/favorites",
  },
];
