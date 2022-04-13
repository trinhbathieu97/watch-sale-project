import React from "react";
import "./Testimonials.scss";
import imgGirl from "../../imgApp/img_girl.png";
import Prevent from "../../imgApp/preview.png";
import Next from "../../imgApp/next.png";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="Testimonials_img">
        <div className="box_img"></div>
        <div className="img_girl">
          <img className="img" src={imgGirl} alt="" />
          <div className="preven_next">
            <button>
              <img src={Prevent} alt="" />
            </button>
            <button>
              <img src={Next} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="Testimonials_text">
        <div className="Testimonials_name">Testimonials</div>
        <p className="Testimonials_introduce">
          Loving my new KAILI watch from @matoa_id, the first ever Indonesian
          watch local brand that uses wood as their main material. Like any
          other Matoa products, KAILI is inspired by Indonesian heritage.
        </p>
        <div className="Testimonials_type">Gita Savitri</div>
        <p className="Testimonials_author">Content Creator/Influencer</p>
      </div>
    </div>
  );
};

export default Testimonials;
