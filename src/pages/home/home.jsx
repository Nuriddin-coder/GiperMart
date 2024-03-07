import React from "react";

///// Import Component's:
import { Catalog } from "../../components/catalog";
import { Banner } from "../../components/banner";
import { ProductsSlider } from "../../components/slider/products";

export const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section>
        <div className="mt-4">
          <Banner />
        </div>
      </section>

      {/* Catalog */}
      <section>
        <div className="mt-10">
          <Catalog />
        </div>
      </section>

      {/* Phone and Tablet */}

      <section>
        <div className="container mt-[100px]">
          <ProductsSlider />
        </div>
      </section>
    </div>
  );
};
