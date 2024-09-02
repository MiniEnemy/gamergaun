import React from "react";
import BannerPage from "../../pages/banner/BannerPage";
import Product from "../product/Product";

const Home = () => {
  return (
    <>
      <div className="banner-page">
        <BannerPage />
      </div>
      <div className="">
        <Product />
      </div>
    </>
  );
};

export default Home;
