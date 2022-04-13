import "./RecentNews.scss";
import React from "react";
import imgRencent from "../../imgApp/rencent.png";

const RecentNews = () => {
  return (
    <div className="RecentNews">
      <div className="RecentNews_title">Recent News</div>
      <div className="WhereToTravel">
        <div className="text_Travel">
          <p>Where To Travel</p>
          <div>Matoa Where To Travel? Yogyakarta</div>
          <button>Discover</button>
        </div>
        <div className="img_Travel">
          <div className="img_Travel-background"></div>
          <div className="img_Travel-product">
            <img src={imgRencent} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
