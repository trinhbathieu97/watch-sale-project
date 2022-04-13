import React from "react";
import Slider from "../Slider/Slider";
import Advertising from "../Advertising/Advertising";
import MonthlyDeals from "../MonthlyDeals/MonthlyDeals";
import RecentNews from "../RecentNews/RecentNews";
import ListProducts from "../listProduct/ListProduct";
import Testimonials from "../Testimonials/Testimonials";
import Instagram from "../Instagram/Instagram";
const Container = () => {
  return (
    <div className="Container">
      <Slider />
      <Advertising />
      <MonthlyDeals />
      <RecentNews />
      <ListProducts />
      <Testimonials />
      <Instagram />
    </div>
  );
};

export default Container;
