import React from "react";

//// Component's:
import { Home } from "../pages/home";
import { CatalogSingle } from "../pages/catalogSingle";
import { SearchSingle } from "../pages/searchSingle";

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
    element: <SearchSingle />,
    path: "/search-single/:id",
  },
];
