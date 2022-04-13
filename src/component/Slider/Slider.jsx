import "./Slider.scss";
import React from "react";
import cartContainer from "../../imgApp/cart_container.svg";
import logoCici from "../../imgApp/cici.svg";
import Product1 from "../../imgApp/Product1.svg";
import Preven from "../../imgApp/preven.svg";
import Next from "../../imgApp/next.svg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider_product-advertisement">
        <div className="slider_img_product">
          <img src={Product1} alt="" />
        </div>
        <div className="slider_detail_product">
          <div className="slider_name-Product">
            <div>WAY KAMBAS MINI EBONY</div>
          </div>
          <div className="slider_product-description">
            <p>
              MATOA Way Kambas - This wood is chosen to represent the Sumatran
              Rhino's skin which is designed with an overlap effect on its strap
              to represent Rhino's skin.
            </p>
          </div>
          <div className="slider_product-Discover">Discover</div>
          <div className="product_cart">
            <button>
              <img src={cartContainer} alt="" />
              <span>Add to cart</span>
            </button>
            <div className="product_cici">
              <img src={logoCici} alt="" />
            </div>
          </div>
        </div>
        <div className="preven_next">
          <button className="preven">
            <img src={Preven} alt="" />
          </button>
          <button className="next">
            <img src={Next} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
