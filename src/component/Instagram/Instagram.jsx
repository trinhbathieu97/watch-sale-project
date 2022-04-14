import React from "react";
import "./Instagram.scss";
import Item1 from "../../imgApp/item_1.png";
import Item2 from "../../imgApp/item_2.png";
import Item3 from "../../imgApp/item_3.png";
import Item4 from "../../imgApp/item_4.png";
import Item5 from "../../imgApp/item_5.png";
const Instagram = () => {
  return (
    <div className="Instagram">
      <div className="Instagram_title">Instagram</div>
      <div className="Instagram_img-item">
        <div className="img">
          <img src={Item1} alt="" />
        </div>
        <div className="img">
          <img src={Item2} alt="" />
        </div>
        <div className="img">
          <img src={Item3} alt="" />
        </div>
        <div className="img">
          <img src={Item4} alt="" />
        </div>
        <div className="img">
          <img src={Item5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
