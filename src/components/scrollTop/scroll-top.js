import React from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const Location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [Location.pathname]);
  return null;
};
