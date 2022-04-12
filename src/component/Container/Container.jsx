import "./Container.scss";
import React from "react";
import cartContainer from "../../imgApp/cart_container.svg";
import logoCici from "../../imgApp/cici.svg";
import Product1 from "../../imgApp/Product1.svg";
import Preven from "../../imgApp/preven.svg";
import Next from "../../imgApp/next.svg";

const Container = () => {
  return (
    <div className="Container">
      <div className="product-advertisement">
        <div className="img_product-advertisement">
          <img src={Product1} alt="" />
        </div>
        <div className="detail_product-advertisement">
          <div className="name_Product">
            <div>WAY KAMBAS MINI EBONY</div>
          </div>
          <div className="product_description">
            <p>
              MATOA Way Kambas - This wood is chosen to represent the Sumatran
              Rhino's skin which is designed with an overlap effect on its strap
              to represent Rhino's skin.
            </p>
          </div>
          <div className="product_Discover">Discover</div>
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

export default Container;
