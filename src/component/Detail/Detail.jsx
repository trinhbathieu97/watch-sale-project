import React from "react";
import "./Detail.scss";
import product from "../../imgApp/Product1.svg";
import product1 from "../../imgApp/detail_4.png";
import product2 from "../../imgApp/detail_1.png";
import product3 from "../../imgApp/detail_2.png";
import product4 from "../../imgApp/detail_3.png";
import type1 from "../../imgApp/detail_type1.png";
import type2 from "../../imgApp/detail_type2.png";
import cartDetail from "../../imgApp/cart_container.svg";
import logoCici from "../../imgApp/cici.svg";
import DetailTabs from "../DetailTabs/DetailTabs";
import DetailProduct from "../DetailProduct/DetailProduct";

const Detail = () => {
  return (
    <div className="Detail">
      <div className="Detail_navbar">
        <ul>
          <li>
            <a href="">
              Home <span>/</span>
            </a>
          </li>
          <li>
            <a href="">
              Product <span>/</span>
            </a>
          </li>
          <li>
            <a href="">
              Watches <span>/</span>
            </a>
          </li>
          <li>
            <a href="" className="Way_Kambas-Mini-Ebony">
              Way Kambas Mini Ebony{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="Detail_Product">
        <div className="Detail_img-items">
          <div className="Detail_img-list">
            <div className="img-list">
              <div>
                <img src={product1} alt="" />
              </div>
              <div>
                <img src={product2} alt="" />
              </div>
              <div>
                <img src={product3} alt="" />
              </div>
              <div>
                <img src={product4} alt="" />
              </div>
            </div>
          </div>
          <div className="img_product-big">
            <img src={product} alt="" />
          </div>
        </div>
        <div className="Detail_Name-pricer">
          <h1>WAY KAMBAS MINI EBONY</h1>
          <div className="pricer_sale">Rp 1.280.000</div>
          <div className="pricer">Rp 1.024.000</div>
          <p>Choose Model</p>
          <div className="type_color">
            <div>
              <img src={type1} alt="" />
            </div>
            <div>
              <img src={type2} alt="" />
            </div>
          </div>
          <div className="addtoCart_Detail">
            <button className="prever">-</button>
            <div className="quantity">1</div>
            <button className="next">+</button>
            <button className="Add_to-cart">
              <img src={cartDetail} alt="" />
              <p>Add to cart</p>
            </button>
            <button className="logo_Cici">
              <img src={logoCici} alt="" />
            </button>
          </div>
        </div>
      </div>
      <DetailTabs />
      <DetailProduct />
    </div>
  );
};

export default Detail;
