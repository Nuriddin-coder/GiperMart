import React from "react";
import { lazy } from "react";

//// Component's:


const Home = lazy(() => import("../pages/home"));

const CatalogSingle = lazy(() =>
  import("../pages/catalogSingle")
);
const ProductSingle = lazy(() =>
  import("../pages/productSingle")
);
const BrandSingle = lazy(() => import("../pages/brandSingle"));
const Basket = lazy(() => import("../pages/basket"));
const Order = lazy(() => import("../pages/order"));
const Favorites = lazy(() => import("../pages/favorites"));

const pages = [
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

export default pages;
