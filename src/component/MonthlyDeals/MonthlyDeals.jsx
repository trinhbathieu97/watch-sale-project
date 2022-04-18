import React from "react";
import "./MonthlyDeals.scss";
import monthly1 from "../../imgApp/mothty1.png";
import monthly2 from "../../imgApp/mothty2.png";
import monthly3 from "../../imgApp/mothty3.png";
import monthly4 from "../../imgApp/mothty4.png";

import tim from "../../imgApp/tim.png";
import { Link } from "react-router-dom";
const MonthlyDeals = () => {
  return (
    <div className="monthlyDeals">
      <div className="monthlyDeals_title">Monthly Deals</div>
      <div className="monthlyDeals_product">
        <div className="info_product">
          <Link to="/detail" style={{ color: "#333333" }}>
            <div className="info_product-img">
              <img src={monthly1} alt="asdasd" />
            </div>
            <div className="info_product-pricer">
              <div className="name">Singo Ebony</div>
              <p className="vbuot">20% Off</p>
              <p className="pricer_sale">Rp 1.500.000</p>
              <div className="pricer">Rp 1.264.000</div>
              <div className="Cart_monthly">
                <div className="add_cart">
                  <button className="button_tim">
                    <img src={tim} alt="" />
                  </button>
                  <button className="button_cart">Add to cart</button>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ================== */}
        <div className="info_product">
          <div className="info_product-img">
            <img src={monthly2} alt="asdasd" />
          </div>
          <div className="info_product-pricer">
            <div className="name">Singo Ebony</div>
            <p className="vbuot">20% Off</p>
            <p className="pricer_sale">Rp 1.500.000</p>
            <div className="pricer">Rp 1.264.000</div>
            <div className="Cart_monthly">
              <div className="add_cart">
                <button className="button_tim">
                  <img src={tim} alt="" />
                </button>
                <button className="button_cart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* =============== */}
        <div className="info_product">
          <div className="info_product-img">
            <img src={monthly3} alt="asdasd" />
          </div>
          <div className="info_product-pricer">
            <div className="name">Singo Ebony</div>
            <p className="vbuot">20% Off</p>
            <p className="pricer_sale">Rp 1.500.000</p>
            <div className="pricer">Rp 1.264.000</div>
            <div className="Cart_monthly">
              <div className="add_cart">
                <button className="button_tim">
                  <img src={tim} alt="" />
                </button>
                <button className="button_cart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* ============ */}
        <div className="info_product">
          <div className="info_product-img">
            <img src={monthly4} alt="asdasd" />
          </div>
          <div className="info_product-pricer">
            <div className="name">Singo Ebony</div>
            <p className="vbuot">20% Off</p>
            <p className="pricer_sale">Rp 1.500.000</p>
            <div className="pricer">Rp 1.264.000</div>
            <div className="Cart_monthly">
              <div className="add_cart">
                <button className="button_tim">
                  <img src={tim} alt="" />
                </button>
                <button className="button_cart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyDeals;
